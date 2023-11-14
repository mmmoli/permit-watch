import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DRIZZLE_DATABASE_URL;
if (!connectionString) {
	throw new Error('Missing DRIZZLE_DATABASE_URL environment variable');
}

export default {
	out: './src/lib/server/infra/drizzle/migrations',
	schema: './src/lib/server/**/*.drizzle-schema.ts',
	driver: 'pg',
	dbCredentials: {
		connectionString
	}
} satisfies Config;
