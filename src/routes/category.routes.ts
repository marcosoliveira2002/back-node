import { FastifyInstance } from "fastify";
import { CategoriaProdutoUseCase } from "../usecases/category.usecase";

export async function categoryRoutes(app: FastifyInstance) {
  const categoriaProdutoUseCase = new CategoriaProdutoUseCase();

  app.post("/", async (request, reply) => {
    const { categoria } = request.body as { categoria: string };

    try {
      const newCategory = await categoriaProdutoUseCase.create(categoria);
      return reply.status(201).send(newCategory);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });
  app.get("/list", async (request, reply) => {
    try {
      const categorias = await categoriaProdutoUseCase.list();
      return reply.status(200).send(categorias);
    } catch (error) {
      if (error instanceof Error) {
        return reply.status(500).send({ error: error.message });
      } else {
        return reply.status(500).send({ error: "Erro desconhecido" });
      }
    }
  });
}

