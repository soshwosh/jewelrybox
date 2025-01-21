import EditFormInput from "@/app/ui/forms/edit_FormInput";
import { fetchJewelryItemById } from "@/lib/dbutils";
import Link from "next/link";
import { updateJewelryItem } from "@/lib/actions";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const jewelryItem = await fetchJewelryItemById(Number(params.id));
  const updateJewelryItemWithId = updateJewelryItem.bind(
    null,
    jewelryItem.id.toString()
  );

  return (
    <div className="flex justify-center items-center">
      <form
        action={updateJewelryItemWithId}
        className="flex flex-col w-full md:w-1/2"
      >
        <EditFormInput
          inputName="itemName"
          itemTitle="Item Name"
          defaultValue={jewelryItem.name}
        ></EditFormInput>
        <EditFormInput
          inputName="brand"
          itemTitle="Brand"
          defaultValue={jewelryItem.brand}
        ></EditFormInput>
        <EditFormInput
          inputName="type"
          itemTitle="Jewelry Type"
          defaultValue={jewelryItem.type}
        ></EditFormInput>
        <EditFormInput
          inputName="material"
          itemTitle="Material"
          defaultValue={jewelryItem.material}
        ></EditFormInput>
        <EditFormInput
          inputName="color"
          itemTitle="Color"
          defaultValue={jewelryItem.color}
        ></EditFormInput>
        <EditFormInput
          inputName="notes"
          itemTitle="Notes"
          defaultValue={jewelryItem.notes}
        ></EditFormInput>
        <EditFormInput
          inputName="image"
          itemTitle="Image URL"
          defaultValue={jewelryItem.imageUrl}
        ></EditFormInput>

        <div className="flex flex-row justify-around">
          <button className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300">
            <Link href="/alljewelry">Cancel</Link>
          </button>
          <button
            type="submit"
            className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
