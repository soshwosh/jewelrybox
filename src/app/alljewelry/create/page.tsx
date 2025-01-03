import { createJewelryItem } from "@/lib/actions";

export default async function Page() {
  return (
    <form action={createJewelryItem}>
      <label htmlFor="itemName">Item Name</label>
      <input type="text" name="itemName" id="" placeholder="Jewelry Item Name" />
      <button type="submit" className="bg-pink-500 rounded-md">Save</button>
    </form>
  );
}
