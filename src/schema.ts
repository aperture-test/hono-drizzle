import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core"


const products = pgTable("products", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 100 }),
	price: integer("price"),
});

export { products }