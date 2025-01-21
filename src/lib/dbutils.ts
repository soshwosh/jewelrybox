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

export async function fetchJewelryItemById(id: number) {
  try {
    const data = await sql<JewelryItemType>`
        SELECT * 
        FROM jewelry_items
        WHERE jewelry_items.id = ${id}`;

    return data.rows[0];
  } catch (e) {
    console.error("Database Error: ", e);
    throw new Error(`Failed to fetch jewelry item data with id: ${id}.`);
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

export async function fetchFilteredData(query: string) {
  try {
    const jewelry = await sql<JewelryItemType>`
      SELECT *
      FROM jewelry_items
      WHERE 
        jewelry_items.name ILIKE ${`%${query}%`} OR
        jewelry_items.type ILIKE ${`%${query}%`} OR
        jewelry_items.material ILIKE ${`%${query}%`} OR
        jewelry_items.color ILIKE ${`%${query}%`} OR
        jewelry_items.brand ILIKE ${`%${query}%`} OR
        jewelry_items.notes ILIKE ${`%${query}%`};
    `;

    return jewelry.rows;
  } catch (e) {
    console.error("Database Error:", e);
    throw new Error('Failed to fetch filtered jewelry data.')
  }

}