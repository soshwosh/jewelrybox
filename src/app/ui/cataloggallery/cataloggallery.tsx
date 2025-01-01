import { JewelryItemType } from "@/app/types/jewelryItemType";
import {FC} from "react";
import CatalogCard from "./catalogcard";

interface Props {
    jewelryList: JewelryItemType[],
}

const CatalogGallery: FC<Props> = (
    {jewelryList}
) => {
    return (
        <div className="flex flex-wrap gap-4">
            {
                jewelryList.map((jewelryItem) => {
                    return (
                        <CatalogCard jewelry={jewelryItem}></CatalogCard>
                    );
                })
            }
        </div>
    );
};

export default CatalogGallery;