import { FC } from "react";
import { JewelryItemType } from "@/app/types/jewelryItemType";

interface Props {
  jewelry: JewelryItemType;
  // add some state handlers like changeNameText, changeTypeText, etc
}

const CatalogCard: FC<Props> = ({ jewelry }) => {
  return (
    // From https://v1.tailwindcss.com/components/cards#stacked
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:-translate-y-2 hover:duration-300">
      <div className="relative w-full h-48">
        <img
          className="w-full h-full absolute inset-0 object-cover"
          src={jewelry.imageUrl}
          alt=""
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{jewelry.name}</div>
        <p className="text-gray-700 text-base">{jewelry.notes}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{jewelry.type}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{jewelry.material}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{jewelry.color}
        </span>
      </div>
      
    </div>
  );
};

export default CatalogCard;
