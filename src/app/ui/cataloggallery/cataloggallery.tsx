"use client";
import { JewelryItemType } from "@/app/types/jewelryItemType";
import { FC, useState } from "react";
import CatalogCard from "./catalogcard";
import SearchBar from "./searchbar";
import AddJewelryForm from "../addJewelryComponents/addJewelryForm";
import { addJewelryItem } from "@/lib/dbutils";

interface Props {
  jewelryList: JewelryItemType[];
}

const CatalogGallery: FC<Props> = ({ jewelryList }) => {
  const [jewelryItemList, setJewelryItemList] =
    useState<JewelryItemType[]>(jewelryList);

  const createJewelryItem = (
    itemName: string,
    brand: string,
    type: string,
    material: string,
    color: string,
    notes: string,
    image: string
  ) => {
    const nextId = (jewelryItemList.at(-1)?.id || 0) + 1;

    const newItem: JewelryItemType = {
      id: nextId,
      userid: 999,
      name: itemName,
      brand: brand,
      type: type,
      material: material,
      color: color,
      notes: notes,
      imageUrl: image,
    };
    // dbutil function to add new item
    console.log("adding new jewelry data to db...", newItem);
    const data = addJewelryItem(
      newItem.id,
      newItem.userid,
      newItem.name,
      newItem.brand,
      newItem.type,
      newItem.material,
      newItem.color,
      newItem.notes,
      newItem.imageUrl
    );

    console.log("data", data);
    setJewelryItemList((prev) => [...prev, newItem]);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center mb-3">
        <SearchBar />
        <AddJewelryForm createJewelryItem={createJewelryItem} />
      </div>

      {/* Gallery of jewelry items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {jewelryList.map((jewelryItem) => {
          return (
            <CatalogCard
              key={jewelryItem.id}
              jewelry={jewelryItem}
            ></CatalogCard>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogGallery;
