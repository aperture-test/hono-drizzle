import { drizzle } from 'drizzle-orm/node-postgres';
import { Client } from 'pg';

const client = new Client({
  host: Bun.env.DB_HOST,
  port: parseInt(Bun.env.DB_PORT || '5432'),
  user: Bun.env.DB_USERNAME,
  password: Bun.env.DB_PASSWORD,
  database: Bun.env.DB_DATABASE,
});
await client.connect();
const db = drizzle(client);

export default db;
