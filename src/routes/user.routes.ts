import type { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user.usecase";
import { UserCreate } from "../interfaces/user.interface";

export async function userRoutes(app: FastifyInstance) {
  const userUseCase = new UserUseCase();

  app.post("/user", async (request, reply) => {
    const { login, senha, tipo } = request.body as { login: string; senha: string; tipo: string };

    try {
      const newUser = await userUseCase.create({ login, senha, tipo });
      return reply.status(201).send(newUser);
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });

  
  app.post("/login", async (request, reply) => {
    const { login, senha } = request.body as { login: string; senha: string };

    try {
      const user = await userUseCase.login(login, senha);
      return reply.status(200).send({ message: "Login bem-sucedido", user });
    } catch (err) {
      return reply.status(400).send({ error: (err as Error).message });
    }
  });
}