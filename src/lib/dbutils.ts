import { sql } from "@vercel/postgres";
import { JewelryItemType } from "../app/types/jewelryItemType";

export async function fetchAllJewelryItems() {
  try {
    const data = await sql<JewelryItemType>`
        SELECT * 
        FROM jewelry_items
        ORDER BY jewelry_items.id
        LIMIT 100`;

    return data.rows;
  } catch (e) {
    console.error("Database Error: ", e);
    throw new Error("Failed to fetch jewelry item data.");
  }
}

export async function fetchBraceletData() {
  try {
    const data = await sql<JewelryItemType>`
        SELECT * 
        FROM jewelry_items
        WHERE jewelry_items.type = 'bracelet'
        ORDER BY jewelry_items.id`;

    return data.rows;
  } catch (e) {
    console.error("Database Error: ", e);
    throw new Error("Failed to fetch bracelet data.");
  }
}

export async function fetchEarringData() {
  try {
    const data = await sql<JewelryItemType>`
        SELECT * 
        FROM jewelry_items
        WHERE jewelry_items.type = 'earrings'
        ORDER BY jewelry_items.id`;

    return data.rows;
  } catch (e) {
    console.error("Database Error: ", e);
    throw new Error("Failed to fetch earring data.");
  }
}

export async function fetchNecklaceData() {
  try {
    const data = await sql<JewelryItemType>`
        SELECT * 
        FROM jewelry_items
        WHERE jewelry_items.type = 'necklace'
        ORDER BY jewelry_items.id`;

    return data.rows;
  } catch (e) {
    console.error("Database Error: ", e);
    throw new Error("Failed to fetch earring data.");
  }
}

export async function fetchRingData() {
  try {
    const data = await sql<JewelryItemType>`
        SELECT * 
        FROM jewelry_items
        WHERE jewelry_items.type = 'ring'
        ORDER BY jewelry_items.id`;

    return data.rows;
  } catch (e) {
    console.error("Database Error: ", e);
    throw new Error("Failed to fetch bracelet data.");
  }
}
