import { JewelryItemType } from "@/app/types/jewelryItemType";
import CatalogCard from "./catalogcard";
import { fetchFilteredData } from "@/lib/dbutils";

interface Props {
  query: string;
  defaultFetchData: () => Promise<JewelryItemType[]>;
}

export default async function CatalogGallery({
  query,
  defaultFetchData,
}: Props) {
  
  const jewelryData: JewelryItemType[] =
    query && query !== ""
      ? await fetchFilteredData(query)
      : await defaultFetchData();

  return (
    <div className="w-full">
      {/* Gallery of jewelry items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {jewelryData.map((jewelryItem: JewelryItemType) => {
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
}
