import { type InferSelectModel, type InferInsertModel } from "drizzle-orm"
import { jewelryItems } from "../../../drizzle/migrations/schema"

export type SelectJewelryItem = InferSelectModel<typeof jewelryItems>;
export type InsertJewelryItem = InferInsertModel<typeof jewelryItems>;
