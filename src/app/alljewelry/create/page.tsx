import { createJewelryItem } from "@/lib/actions";
import Link from "next/link";
import AddFormInput from "@/app/ui/forms/add_FormInput";

export default async function Page() {
  return (
    <div className="flex justify-center items-center">
      <form
        action={createJewelryItem}
        className="flex flex-col w-full md:w-1/2"
      >
        <AddFormInput
          inputName="itemName"
          itemTitle="Item Name"
          placeholder="Bean Bracelet"
        ></AddFormInput>
        <AddFormInput
          inputName="brand"
          itemTitle="Brand"
          placeholder="Tiffany & Co"
        ></AddFormInput>
        <AddFormInput
          inputName="type"
          itemTitle="Jewelry Type"
          placeholder="bracelet"
        ></AddFormInput>
        <AddFormInput
          inputName="material"
          itemTitle="Material"
          placeholder="gold"
        ></AddFormInput>
        <AddFormInput
          inputName="color"
          itemTitle="Color"
          placeholder="yellow"
        ></AddFormInput>
        <AddFormInput
          inputName="notes"
          itemTitle="Notes"
          placeholder="grad present from grandma"
        ></AddFormInput>
        <AddFormInput
          inputName="image"
          itemTitle="Image URL"
          placeholder="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/elsa-perettibean-design-bracelet-34900965_1041295_AV_2.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp"
        ></AddFormInput>

        <div className="flex flex-row justify-around">
          <button className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300">
            <Link href="/alljewelry">Cancel</Link>
          </button>
          <button type="submit" className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
