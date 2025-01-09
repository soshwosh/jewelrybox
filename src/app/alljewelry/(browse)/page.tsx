import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import SearchBar from "@/app/ui/cataloggallery/searchbar";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div>
      <SearchBar placeholder="Search entire jewelry collection" />
      <CatalogGallery query={query} />
    </div>
  );
}
