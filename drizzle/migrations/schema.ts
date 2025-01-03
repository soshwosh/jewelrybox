import {
  pgTable,
  serial,
  varchar,
  foreignKey,
  integer,
  text,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial().primaryKey().notNull(),
  username: varchar({ length: 100 }),
  password: varchar({ length: 16 }),
});

export const jewelryItems = pgTable(
  "jewelry_items",
  {
    id: serial().primaryKey().notNull(),
    userid: integer().notNull(),
    name: varchar({ length: 30 }).default(""),
    type: varchar({ length: 10 }).default("earrings"),
    material: varchar({ length: 30 }).default(""),
    color: varchar({ length: 10 }).default(""),
    brand: varchar({ length: 30 }).default(""),
    notes: text().default(""),
    imageUrl: text().default(""),
  },
  (table) => [
    foreignKey({
      columns: [table.userid],
      foreignColumns: [users.id],
      name: "jewelry_items_userid_fkey",
    }),
  ]
);

export const pairings = pgTable(
  "pairings",
  {
    id: serial().primaryKey().notNull(),
    userid: integer(),
    title: varchar({ length: 30 }),
    items: integer().array(),
  },
  (table) => [
    foreignKey({
      columns: [table.userid],
      foreignColumns: [users.id],
      name: "pairings_userid_fkey",
    }),
  ]
);
