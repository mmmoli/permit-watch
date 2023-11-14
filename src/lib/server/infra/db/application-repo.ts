// import { InMemoryApplicationRepository } from './in-memory-application-repo';
import { DrizzleApplicationRepository } from './drizzle-application-repo';
import { db } from '../drizzle';

// export const applicationRepo = new InMemoryApplicationRepository();

export const applicationRepo = new DrizzleApplicationRepository({
	db
});
