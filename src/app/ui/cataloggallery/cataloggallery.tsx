"use client";
import { JewelryItemType } from "@/app/types/jewelryItemType";
import { FC } from "react";
import CatalogCard from "./catalogcard";
// import SearchBar from "./searchbar";
// import AddJewelryForm from "../addJewelryComponents/addJewelryForm";
// import { addJewelryItem } from "@/lib/dbutils";

interface Props {
  jewelryList: JewelryItemType[];
}

const CatalogGallery: FC<Props> = ({ jewelryList }) => {
  // const [jewelryItemList, setJewelryItemList] =
  //   useState<JewelryItemType[]>(jewelryList);

  return (
    <div className="w-full">
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
