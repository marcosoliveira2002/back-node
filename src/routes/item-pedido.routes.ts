import type { FastifyInstance } from "fastify";
import { ItemPedidoUseCase } from "../usecases/item-pedido.usecase";

const itemPedidoRoutes = async (app: FastifyInstance) => {
  const itemPedidoUseCase = new ItemPedidoUseCase();

  app.post("/add", async (request, reply) => {
    try {
      const { id_pedido, id_produto, quantidade, observacoes } = request.body as {
        id_pedido: string;
        id_produto: string;
        quantidade: number;
        observacoes?: string;
      };
      const newItem = await itemPedidoUseCase.add({ id_pedido, id_produto, quantidade, observacoes });
      return reply.status(201).send(newItem);
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  });

  app.get("/list/:id_pedido", async (request, reply) => {
    try {
      const { id_pedido } = request.params as { id_pedido: string };
      const items = await itemPedidoUseCase.listByPedido(id_pedido);
      return reply.status(200).send(items);
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  });

  app.delete("/delete/:id_item_pedido", async (request, reply) => {
    try {
      const { id_item_pedido } = request.params as { id_item_pedido: string };
      await itemPedidoUseCase.delete(id_item_pedido);
      return reply.status(204).send();
    } catch (error) {
      return reply.status(400).send({ error: (error as Error).message });
    }
  });
};

export { itemPedidoRoutes };
