import { type InferSelectModel } from "drizzle-orm"
import { jewelryItems } from "../../../drizzle/migrations/schema"

export type SelectJewelryItem = InferSelectModel<typeof jewelryItems>;
