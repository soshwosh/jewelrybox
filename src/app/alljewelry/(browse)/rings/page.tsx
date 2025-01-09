// Rings catalog
import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import { fetchRingData } from "@/lib/dbutils";

export default async function Page() {
  const jewelryData = await fetchRingData();

  return <CatalogGallery jewelryList={jewelryData} />;
}
