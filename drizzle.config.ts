import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
// import './drizzle/envConfig';

config({ path: ".env" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/schema.ts",
  out: "./drizzle/migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
