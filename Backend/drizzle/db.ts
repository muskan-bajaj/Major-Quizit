import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL as string,
});

export const getDbInstance = () => {  
  return drizzle(pool, {schema: schema});;
};
