import { FastifyInstance } from "fastify";
import { ProdutoUseCase } from "../usecases/product.usecase";

const produtoRoutes = async (app: FastifyInstance) => {
  const produtoUseCase = new ProdutoUseCase();

  app.post("/create", async (request, reply) => {
    const { nome_produto, preco, id_categoria_produto } = request.body as {
      nome_produto: string;
      preco: number;
      id_categoria_produto: string;
    };

    try {
      const newProduto = await produtoUseCase.create({
        nome_produto,
        preco,
        id_categoria_produto,
      });
      return reply.status(201).send(newProduto);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });

  app.get("/list", async (_, reply) => {
    try {
      const produtos = await produtoUseCase.list();
      return reply.status(200).send(produtos);
    } catch (err) {
      return reply.status(500).send({ error: (err as Error).message });
    }
  });

  app.put("/update/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const data = request.body as Partial<{
      nome_produto: string;
      preco: number;
      id_categoria_produto: string;
    }>;

    try {
      const updatedProduto = await produtoUseCase.update(id, data);
      return reply.status(200).send(updatedProduto);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });


  app.delete("/delete/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    try {
      await produtoUseCase.delete(id);
      return reply.status(204).send();
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });
};

export { produtoRoutes };
