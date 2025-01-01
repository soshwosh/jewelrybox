import { SelectJewelryItem } from "@/app/types/drizzleTypes";
import {FC} from "react";
import CatalogCard from "./catalogcard";

interface Props {
  jewelryList: SelectJewelryItem[];
}

const CatalogGallery: FC<Props> = (
    {jewelryList}
) => {
    return (
        <div className="flex flex-wrap gap-4">
            {
                jewelryList.map((jewelryItem) => {
                    return (
                        <CatalogCard key={jewelryItem.id} jewelry={jewelryItem}></CatalogCard>
                    );
                })
            }
        </div>
    );
};

export default CatalogGallery;