// import { JewelryItemType } from "@/app/types/drizzleTypes";
import CatalogCard from "./catalogcard";
import { fetchFilteredData } from "@/lib/dbutils";
import { QueryResultRow } from "pg";

interface Props {
  query: string;
  defaultFetchData: () => QueryResultRow[];
}

export default async function CatalogGallery({
  query,
  defaultFetchData,
}: Props) {
  // if there is no query in the URL, fetch all jewelry items
  // if there is a query, fetch filtered jewelry items
  const jewelryData =
    query && query !== ""
      ? await fetchFilteredData(query)
      : await defaultFetchData();

  return (
    <div className="w-full">
      {/* Gallery of jewelry items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {jewelryData.map((jewelryItem: QueryResultRow) => {
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
