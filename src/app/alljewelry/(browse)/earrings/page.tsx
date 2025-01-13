// Earrings catalog
import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import SearchBar from "@/app/ui/cataloggallery/searchbar";
import { fetchEarringData } from "@/lib/dbutils";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div>
      <SearchBar placeholder="Search earrings" />
      <CatalogGallery query={query} defaultFetchData={fetchEarringData} />
    </div>
  );
}
