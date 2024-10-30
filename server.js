// import { createServer, request } from 'node:http' 

// const server = createServer((request,response)=>{
//   response.write('hello world');
//     return response.end()
// })

// server.listen(3333)

import { fastify } from "fastify";

import { DatabaseMemory } from './database-memory.js'

const server = fastify();

const database = new DatabaseMemory()



server.post('/tipos', (request, reply) => {
  const { nome_tipo_produto } = request.body


  database.create({
    nome_tipo_produto
  })

  return reply.status(201).send()
})

server.get('/tipos', (request) => {
  const search = request.query.search


  
  const tipos = database.list(search)
  return tipos
})

server.put('/tipos/:id', (request, reply) => {
  const tipoId = request.params.id
  const { nome_tipo_produto } = request.body

  database.update(tipoId, {
    nome_tipo_produto
  })

  return reply.status(204).send // sucesso, mas sem conteudo
})

server.delete('/tipos/:id', (request, reply) => {
  const tipoId = request.params.id

  database.delete(tipoId)

  return reply.status(204).send()
})

server.listen({
  port: 3333,
})