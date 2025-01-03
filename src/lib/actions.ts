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
  type: true,
  material: true,
  color: true,
  brand: true,
  notes: true,
  imageUrl: true,
});

export async function createJewelryItem(formData: FormData) {
  //   const rawFormData = {
  //     name: formData.get("itemName"),
  //   };
  const { name } = CreateJewelryItem.parse({
    name: formData.get("itemName"),
  });
  const userid = 1;
  const type = "testType";
  const material = "testMaterial";
  const color = "testColor";
  const brand = "testBrand";
  const notes = "testNotes";
  const imageUrl = "testImage";

  await sql`
    INSERT INTO jewelry_items(userid, name, type, material, color, brand, notes, "imageUrl")
    VALUES(${userid}, ${name}, ${type}, ${material}, ${color}, ${brand}, ${notes}, ${imageUrl})`;

  revalidatePath("/alljewelry");
  redirect("/alljewelry");
}
