import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    driver: 'pg',
    out: './src/drizzle',
    schema: './src/drizzle/schema.ts',
    dbCredentials: {
        host: "localhost",
        port: Number("5432"),
        user: "postgres",
        password: "example",
        database: "eshop",
    },
    // Print all statements
    verbose: true,
    // Always ask for confirmation
    strict: true,
} satisfies Config;