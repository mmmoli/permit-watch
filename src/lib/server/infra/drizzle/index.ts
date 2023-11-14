import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DRIZZLE_DATABASE_URL } from '$env/static/private';
import { Client } from 'pg';
import { schema } from './schema';

const client = new Client({
	connectionString: DRIZZLE_DATABASE_URL
});

await client.connect();

export const db = drizzle(client, { schema, logger: true });
export type Db = typeof db;

await migrate(db, { migrationsFolder: './src/lib/server/infra/drizzle/migrations' });
