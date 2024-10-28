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

server.post('/tipos', () =>{
    database.create({
      nome_tipo_produto
    })
})

server.get('/tipos', () =>{
  return 'Hello world'
})

server.put('/tipos/:id', () =>{
  return 'Hello world'
})

server.delete('/tipos/:id', () =>{
  return 'Hello world'
})

server.listen({
  port: 3333,
})