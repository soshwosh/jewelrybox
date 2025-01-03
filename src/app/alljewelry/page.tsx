import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import { fetchAllJewelryItems } from "@/lib/dbutils";

export default async function Page() {
  const jewelryData = await fetchAllJewelryItems();

  return (
    <div>
      <CatalogGallery jewelryList={jewelryData} />
    </div>
  );
}
