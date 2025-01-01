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
        <div className="flex flex-wrap">
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