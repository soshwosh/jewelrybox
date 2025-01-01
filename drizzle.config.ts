import {config} from 'dotenv'
import { defineConfig } from 'drizzle-kit';

config({path: '.env'})

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lb/schema.ts",
  out: "./drizzle/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});