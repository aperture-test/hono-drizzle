import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { showRoutes } from 'hono/dev';
import products from './products/controllers';

const app = new Hono();

app.use(logger());

app.route('/products', products);

showRoutes(app);

export default app;
