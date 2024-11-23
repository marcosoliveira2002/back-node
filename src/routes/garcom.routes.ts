import { FastifyInstance } from "fastify";
import { GarcomUseCase } from "../usecases/garcom.usecase";
import type { GarcomUpdate } from "../interfaces/garcom.interface"; // Importação necessária

const garcomRoutes = async (app: FastifyInstance) => {
  const garcomUseCase = new GarcomUseCase();

  app.post("/create", async (request, reply) => {
    try {
      const { nome, telefone, id_user } = request.body as {
        nome: string;
        telefone: string;
        id_user: string;
      };
      const newGarcom = await garcomUseCase.create({ nome, telefone, id_user });
      return reply.status(201).send(newGarcom);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });

  app.get("/list", async (request, reply) => {
    try {
      const garcons = await garcomUseCase.list();
      return reply.status(200).send(garcons);
    } catch (err) {
      return reply.status(500).send({ error: (err as Error).message });
    }
  });

  app.put("/update/:id", async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      const data = request.body as Partial<GarcomUpdate>;
      const updatedGarcom = await garcomUseCase.update(id, data);
      return reply.status(200).send(updatedGarcom);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });

  app.delete("/delete/:id", async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      const deletedGarcom = await garcomUseCase.delete(id);
      return reply.status(200).send(deletedGarcom);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });
};

export { garcomRoutes };
