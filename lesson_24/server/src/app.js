import express from 'express';
import cors from 'cors';

import { categories } from './data/categories';
import { products } from './data/products';

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log('Server started!');
});

app.get('/api/categories', (request, response) => {
  response.send(categories);
});

app.get('/api/products/:categoryId', (request, response) => {
  const { categoryId } = request.params;
  const responseProducts = products[categoryId] || [];

  response.send(responseProducts);
});

app.post('/api/order', (request, response) => {
  const order = request.body;
  console.log(order);
  response.send('ok');
});