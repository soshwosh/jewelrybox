"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const AddJewelryFormSchema = z.object({
  id: z.number(),
  userid: z.number(),
  name: z.string(),
  type: z.string(),
  material: z.string(),
  color: z.string(),
  brand: z.string(),
  notes: z.string(),
  imageUrl: z.string(),
});

const CreateJewelryItem = AddJewelryFormSchema.omit({
  id: true,
  userid: true,
});

export async function createJewelryItem(formData: FormData) {
  const { name, brand, type, material, color, notes, imageUrl } =
    CreateJewelryItem.parse({
      name: formData.get("itemName"),
      brand: formData.get("brand"),
      type: formData.get("type"),
      material: formData.get("material"),
      color: formData.get("color"),
      notes: formData.get("notes"),
      imageUrl: formData.get("image"),
    });
  const userid = 1;

  await sql`
    INSERT INTO jewelry_items(userid, name, type, material, color, brand, notes, "imageUrl")
    VALUES(${userid}, ${name}, ${type}, ${material}, ${color}, ${brand}, ${notes}, ${imageUrl})`;

  revalidatePath("/alljewelry");
  redirect("/alljewelry");
}
