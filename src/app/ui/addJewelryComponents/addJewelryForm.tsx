"use client";
import { FC, useState, ChangeEvent } from "react";
import FormInput from "./formInput";
import Link from "next/link";

interface Props {
  createJewelryItem: (
    itemName: string,
    brand: string,
    type: string,
    material: string,
    color: string,
    notes: string,
    image: string
  ) => void;
}

const AddJewelryForm: FC<Props> = ({ createJewelryItem }) => {
  const [itemName, setItemName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [material, setMaterial] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleItemNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleBrandInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };
  const handleTypeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };
  const handleMaterialInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMaterial(e.target.value);
  };

  const handleColorInput = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleNotesInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNotes(e.target.value);
  };

  const handleImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
  };

  const handleSave = () => {
    console.log(itemName, brand, type, material, color, notes, image);
    createJewelryItem(itemName, brand, type, material, color, notes, image);
  };

  return (
    <div className="flex flex-col w-1/2">
      <FormInput
        inputName="itemName"
        itemTitle="Item Name"
        placeholder="Bean Bracelet"
        onChange={handleItemNameInput}
      ></FormInput>
      <FormInput
        inputName="brand"
        itemTitle="Brand"
        placeholder="Tiffany & Co"
        onChange={handleBrandInput}
      ></FormInput>
      <FormInput
        inputName="type"
        itemTitle="Jewelry Type"
        placeholder="bracelet"
        onChange={handleTypeInput}
      ></FormInput>
      <FormInput
        inputName="material"
        itemTitle="Material"
        placeholder="gold"
        onChange={handleMaterialInput}
      ></FormInput>
      <FormInput
        inputName="color"
        itemTitle="Color"
        placeholder="yellow"
        onChange={handleColorInput}
      ></FormInput>
      <FormInput
        inputName="notes"
        itemTitle="Notes"
        placeholder="grad present from grandma"
        onChange={handleNotesInput}
      ></FormInput>
      <FormInput
        inputName="image"
        itemTitle="Image URL"
        placeholder="https://media.tiffany.com/is/image/Tiffany/EcomItemL2/elsa-perettibean-design-bracelet-34900965_1041295_AV_2.jpg?&op_usm=1.0,1.0,6.0&defaultImage=NoImageAvailableInternal&&defaultImage=NoImageAvailableInternal&fmt=webp"
        onChange={handleImageInput}
      ></FormInput>

      <div className="flex flex-row justify-between w-1/2">
        <button className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300">
          <Link href="/alljewelry">Cancel</Link>
        </button>
        <button
          onClick={handleSave}
          className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddJewelryForm;
