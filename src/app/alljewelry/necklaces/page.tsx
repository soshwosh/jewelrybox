// Necklaces catalog
import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import { fetchNecklaceData } from "@/lib/dbutils";

export default async function Page() {
  const jewelryData = await fetchNecklaceData();

  return <CatalogGallery jewelryList={jewelryData} />;
}
