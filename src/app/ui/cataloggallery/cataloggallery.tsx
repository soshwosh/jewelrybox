"use client";
import { SelectJewelryItem } from "@/app/types/drizzleTypes";
import { FC, useState } from "react";
import CatalogCard from "./catalogcard";
import SearchBar from "./searchbar";
import AddJewelryForm from "../addJewelryComponents/addJewelryForm";
import { addJewelryItem } from "@/lib/dbutils";

interface Props {
  jewelryList: SelectJewelryItem[];
}

const CatalogGallery: FC<Props> = ({ jewelryList }) => {
  const [jewelryItemList, setJewelryItemList] =
    useState<SelectJewelryItem[]>(jewelryList);

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

    const newItem: SelectJewelryItem = {
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
    <div>
      <div className="flex flex-col items-center justify-center mb-3 ">
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
