import { JewelryItemType } from "@/app/types/drizzleTypes";
import CatalogCard from "./catalogcard";
import { fetchAllJewelryItems, fetchFilteredData } from "@/lib/dbutils";

export default async function CatalogGallery({query} : {query: string}) {

  // if there is no query in the URL, fetch all jewelry items
  // if there is a query, fetch filtered jewelry items
  const jewelryData =
    query && query !== ""
      ? await fetchFilteredData(query)
      : await fetchAllJewelryItems();

  return (
    <div className="w-full">
      {/* Gallery of jewelry items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {jewelryData.map((jewelryItem) => {
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
