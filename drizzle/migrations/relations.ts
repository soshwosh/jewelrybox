import { relations } from "drizzle-orm/relations";
import { users, jewelryItems, pairings } from "./schema";

export const jewelryItemsRelations = relations(jewelryItems, ({one}) => ({
	user: one(users, {
		fields: [jewelryItems.userid],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	jewelryItems: many(jewelryItems),
	pairings: many(pairings),
}));

export const pairingsRelations = relations(pairings, ({one}) => ({
	user: one(users, {
		fields: [pairings.userid],
		references: [users.id]
	}),
}));