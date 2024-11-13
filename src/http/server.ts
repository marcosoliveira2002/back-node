import fastify, { type FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import { userRoutes } from '../routes/user.routes';

const app: FastifyInstance = fastify();


app.register(cors, {
  origin: (origin, cb) => {
    const allowedOrigins = [
      'http://127.0.0.1:5500', // Live Server do VS Code
      'http://localhost:3333', 
      // 'http://localhost:4000'  /
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


app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
