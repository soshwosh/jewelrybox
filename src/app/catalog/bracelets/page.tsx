// Bracelets catalog
import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import { fetchBraceletData } from "@/lib/dbutils";

export default async function Page() {
  const jewelryData = await fetchBraceletData();

  return <CatalogGallery jewelryList={jewelryData} />;
}
