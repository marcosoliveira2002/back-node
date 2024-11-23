import { PedidoUseCase } from "../usecases/pedido.usecase";
import type { FastifyInstance } from "fastify";

const pedidoRoutes = async (app: FastifyInstance) => {
  const pedidoUseCase = new PedidoUseCase();

  app.post("/create", async (request, reply) => {
    try {
      const { id_mesa, id_garcom } = request.body as { id_mesa: string; id_garcom: string };
      const newPedido = await pedidoUseCase.create({ id_mesa, id_garcom });
      return reply.status(201).send(newPedido);
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  });

  app.patch("/close/:id", async (request, reply) => {
    try {
      const { id } = request.params as { id: string };
      await pedidoUseCase.close(id);
      return reply.status(204).send();
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  });
  app.get("/pedido/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      const pedidoComItens = await pedidoUseCase.getPedidoComItens(id);
      return reply.status(200).send(pedidoComItens);
    } catch (err) {
      return reply.status(404).send({ error: (err as Error).message });
    }
  });
};

export { pedidoRoutes };
