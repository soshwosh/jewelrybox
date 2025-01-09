import { createJewelryItem } from "@/lib/actions";
import Link from "next/link";
import FormInput from "@/app/ui/addJewelryComponents/formInput";

export default async function Page() {
  return (
    <div className="flex justify-center items-center">
      <form action={createJewelryItem} className="flex flex-col w-full md:w-1/2">
        <FormInput
          inputName="itemName"
          itemTitle="Item Name"
          placeholder="Bean Bracelet"
        ></FormInput>
        <FormInput
          inputName="brand"
          itemTitle="Brand"
          placeholder="Tiffany & Co"
        ></FormInput>
        <FormInput
          inputName="type"
          itemTitle="Jewelry Type"
          placeholder="bracelet"
        ></FormInput>
        <FormInput
          inputName="material"
          itemTitle="Material"
          placeholder="gold"
        ></FormInput>
        <FormInput
          inputName="color"
          itemTitle="Color"
          placeholder="yellow"
        ></FormInput>
        <FormInput
          inputName="notes"
          itemTitle="Notes"
          placeholder="grad present from grandma"
        ></FormInput>
        <FormInput
          inputName="image"
          itemTitle="Image URL"
          placeholder="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/elsa-perettibean-design-bracelet-34900965_1041295_AV_2.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp"
        ></FormInput>

        <div className="flex flex-row justify-around">
          <button className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300">
            <Link href="/alljewelry">Cancel</Link>
          </button>
          <button className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
