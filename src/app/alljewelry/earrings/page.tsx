// Earrings catalog
import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import { fetchEarringData } from "@/lib/dbutils";

export default async function Page() {
  const jewelryData = await fetchEarringData();

  return <CatalogGallery jewelryList={jewelryData} />;
}
