"use client";
import { SelectJewelryItem } from "@/app/types/drizzleTypes";
import { FC, useState } from "react";
import CatalogCard from "./catalogcard";

interface Props {
  jewelryList: SelectJewelryItem[];
}

const CatalogGallery: FC<Props> = ({ jewelryList }) => {
  const [jewelryItemList, setJewelryItemList] =
    useState<SelectJewelryItem[]>(jewelryList);

  const createJewelryItem = () => {
    console.log("create jewelry item");
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between mb-3 ">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search jewelry catalog"
          className="bg-slate-100 w-1/2 rounded-2xl px-3 py-2 my-2 outline-none"
        />
        <button
          onClick={createJewelryItem}
          className="w-auto bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-600 hover:duration-300"
        >
          Add New Jewelry
        </button>
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
