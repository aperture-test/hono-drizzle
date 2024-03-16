import { products } from '@/schema';
import { z } from 'zod';

type Product = typeof products.$inferSelect;
type ProductInsert = typeof products.$inferInsert;

const ProductZ = z.object({
  title: z.string(),
  price: z.coerce.number().int().min(0),
});

export type { Product, ProductInsert };
export { ProductZ };
