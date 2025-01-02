import { sql } from "@vercel/postgres";
import { JewelryItemType } from "../types/jewelryItemType";

async function addJewelryItem(newItem: JewelryItemType) {
  const data = await sql`
        INSERT INTO jewelry_items (id, userid, name, brand, type, material, color, notes, imageUrl)
        VALUES (${newItem.id}, ${newItem.userid}, ${newItem.name}, ${newItem.brand}, ${newItem.type}, ${newItem.material}, ${newItem.color}, ${newItem.notes}, ${newItem.imageUrl})
    `;

  return data.rows;
}

export async function GET() {
  try {
    const exampleItem: JewelryItemType = {
      id: 999,
      userid: 999,
      name: "Example Necklace",
      brand: "Sample Brand",
      type: "Necklace",
      material: "Gold",
      color: "Yellow",
      notes: "A beautiful example item",
      imageUrl:
        "https://i.pinimg.com/236x/9c/ac/cc/9cacccd42694636b66cfd582666224d1.jpg",
    };

    return Response.json(await addJewelryItem(exampleItem));
  } catch (e) {
    console.error("Database Error: ", e);
    throw new Error("Failed to add jewelry item.");
  }
}
