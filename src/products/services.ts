import db from '@/drizzle/db';
import { products as ProductsTable } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { ProductInsert } from './model';

class ProductService {
  constructor() {}

  async get() {
    const result = await db.select().from(ProductsTable);

    return result;
  }

  async getById(id: number) {
    const result = await db
      .select()
      .from(ProductsTable)
      .where(eq(ProductsTable.id, id));

    return result;
  }

  async create(product: ProductInsert) {
    const result = await db.insert(ProductsTable).values(product).returning();

    return result;
  }
  
  async update(id: number, product: ProductInsert) {
    const result = await db
      .update(ProductsTable)
      .set(product)
      .where(eq(ProductsTable.id, id))
      .returning();

    return result;
  }

  async delete(id: number) {
    const result = await db
      .delete(ProductsTable)
      .where(eq(ProductsTable.id, id))
      .returning();

    return result;
  }
}

export default ProductService;
