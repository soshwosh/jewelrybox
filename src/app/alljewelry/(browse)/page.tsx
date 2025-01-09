import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import SearchBar from "@/app/ui/cataloggallery/searchbar";

export default async function Page() {
  return (
    <div>
      <SearchBar placeholder="Search entire jewelry collection" />
      <CatalogGallery />
    </div>
  );
}
