import { Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import ProductService from './services';
import { ProductZ } from './model';

const paramsZ = z.object({
  id: z.coerce.number().int().positive(),
});

const products = new Hono();
const productService = new ProductService();

products.get('/', async (c) => {
  const products = await productService.get();
  return c.json(products);
});

products.get('/:id', zValidator('param', paramsZ), async (c) => {
  const id = Number(c.req.param('id'));
  const result = await productService.getById(id);
  if (result.length === 0) {
    console.log('Product not found');
    c.status(404);
    return c.json({ message: 'Product not found' });
  }
  return c.json(result[0]);
});

products.post('/', zValidator('json', ProductZ), async (c) => {
  const product = await c.req.json();
  const result = await productService.create(product);
  return c.json(result);
});

products.put(
  '/:id',
  zValidator('param', paramsZ),
  zValidator('json', ProductZ),
  async (c) => {
    const id = Number(c.req.param('id'));
    const product = await c.req.json();
    const result = await productService.update(id, product);
    return c.json(result);
  },
);

products.delete('/:id', zValidator('param', paramsZ), async (c) => {
  const id = Number(c.req.param('id'));
  const result = await productService.delete(id);
  if (result.length === 0) {
    console.log('Product not found');
    c.status(404);
    return c.json({ message: 'Product not found' });
  }
  return c.json(result);
});

export default products;
