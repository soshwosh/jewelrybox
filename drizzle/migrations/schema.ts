import { pgTable, serial, varchar, foreignKey, integer, text } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const users = pgTable("users", {
	id: serial().primaryKey().notNull(),
	username: varchar({ length: 100 }),
	password: varchar({ length: 16 }),
});

export const jewelryItems = pgTable("jewelry_items", {
	id: serial().primaryKey().notNull(),
	userid: integer(),
	name: varchar({ length: 30 }),
	type: varchar({ length: 10 }).notNull(),
	material: varchar({ length: 30 }),
	color: varchar({ length: 10 }),
	brand: varchar({ length: 30 }),
	notes: text(),
	imageUrl: text("image_url"),
}, (table) => [
	foreignKey({
			columns: [table.userid],
			foreignColumns: [users.id],
			name: "jewelry_items_userid_fkey"
		}),
]);

export const pairings = pgTable("pairings", {
	id: serial().primaryKey().notNull(),
	userid: integer(),
	title: varchar({ length: 30 }),
	items: integer().array(),
}, (table) => [
	foreignKey({
			columns: [table.userid],
			foreignColumns: [users.id],
			name: "pairings_userid_fkey"
		}),
]);
