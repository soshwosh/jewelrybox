import {sql} from '@vercel/postgres'
import { SelectJewelryItem } from '../types/drizzleTypes'

export async function fetchAllJewelryItems() {
    try {
        const data = await sql<SelectJewelryItem>`SELECT * FROM jewelry_items`;
        return data.rows;
    }
    catch(e) {
        console.error("Database Error: ", e);
        throw new Error("Failed to fetch jewelry item data.")
    }
}