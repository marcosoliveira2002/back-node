import { fastify } from 'fastify';
import type { FastifyReply, FastifyRequest } from 'fastify';
import { DatabasePrisma } from '../database-memory';

const server = fastify();
const database = new DatabasePrisma();

interface TipoParams {
  id: string;
}

interface TipoQuery {
  search?: string;
}

interface TipoBody {
  nome_tipo_produto: string;
}

server.post('/tipos', async (request: FastifyRequest<{ Body: TipoBody }>, reply: FastifyReply) => {
  const { nome_tipo_produto } = request.body;

  await database.create({ nome_tipo_produto });

  return reply.status(201).send();
});

server.get('/tipos', async (request: FastifyRequest<{ Querystring: TipoQuery }>) => {
  const search = request.query.search;
  const tipos = await database.list(search);
  return tipos;
});

server.put('/tipos/:id', async (request: FastifyRequest<{ Params: TipoParams; Body: TipoBody }>, reply: FastifyReply) => {
  const tipoId = request.params.id;
  const { nome_tipo_produto } = request.body;

  await database.update(tipoId, { nome_tipo_produto });

  return reply.status(204).send();
});

server.delete('/tipos/:id', async (request: FastifyRequest<{ Params: TipoParams }>, reply: FastifyReply) => {
  const tipoId = request.params.id;

  await database.delete(tipoId);

  return reply.status(204).send();
});

server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
