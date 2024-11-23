import { FastifyInstance } from "fastify";
import { MesaUseCase } from "../usecases/mesa.usecase";

const mesaRoutes = async (app: FastifyInstance) => {
  const mesaUseCase = new MesaUseCase();

  app.post("/create", async (request, reply) => {
    try {
      const { numero_mesa } = request.body as { numero_mesa: number };
      const newMesa = await mesaUseCase.create({ numero_mesa });
      return reply.status(201).send(newMesa);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });
  
  app.get("/list", async (request, reply) => {
    try {
      const mesas = await mesaUseCase.list();
      return reply.status(200).send(mesas);
    } catch (error) {
      return reply.status(500).send({ error: (error as Error).message });
    }
  });

  app.delete("/delete/:id", async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      await mesaUseCase.delete(id);
      return reply.status(204).send();
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });
  
};

export { mesaRoutes };
