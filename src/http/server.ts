import fastify, { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { userRoutes } from '../routes/user.routes';
import { categoryRoutes } from '../routes/category.routes';
import { produtoRoutes } from '../routes/product.routes';
import { garcomRoutes } from '../routes/garcom.routes';
import { mesaRoutes } from '../routes/mesa.routes';
import { pedidoRoutes } from '../routes/pedido.routes';
import { itemPedidoRoutes } from '../routes/item-pedido.routes';

const app: FastifyInstance = fastify();

app.register(cors, {
  origin: (origin, cb) => {
    const allowedOrigins = [
      'http://127.0.0.1:5500',
      'http://localhost:3333',
      // 'http://localhost:4000' 
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error('Not allowed by CORS'), false);
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});


app.register(userRoutes, {
  prefix: '/user',
});

app.register(categoryRoutes, {
  prefix: '/category',
});

app.register(produtoRoutes, {
  prefix: "/product",
});

app.register(garcomRoutes, {
  prefix: '/garcom',
});

app.register(pedidoRoutes, {
  prefix: "/pedido"
});

app.register(itemPedidoRoutes, {
  prefix: "/item-pedido"
});

app.register(mesaRoutes, {
  prefix: "/mesa"
});

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
