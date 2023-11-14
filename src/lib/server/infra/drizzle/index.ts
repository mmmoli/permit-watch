import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/node-postgres';
import { DRIZZLE_DATABASE_URL, NODE_ENV } from '$env/static/private';
import { Pool } from 'pg';
import { schema } from './schema';

const pool = new Pool({
	connectionString: DRIZZLE_DATABASE_URL
});

export const db = drizzle(pool, { schema, logger: NODE_ENV === 'development' });
export type Db = typeof db;

await migrate(db, { migrationsFolder: './src/lib/server/infra/drizzle/migrations' });
