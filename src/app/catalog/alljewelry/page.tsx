import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
// import a db util function to fetch al jewelry items

export default function Page() {
  // call db util function, store return obj of all jewelry items in a variable
  const dummyData = [
    {id: 1,
    userid: 1,
    name: "organized chaos choker",
    type: "necklace",
    material: "gold",
    color: "multcolor",
    brand: "",
    notes: "",
    imageUrl: "",},
    {id: 2,
    userid: 2,
    name: "organized chaos choker",
    type: "necklace",
    material: "gold",
    color: "multcolor",
    brand: "",
    notes: "",
    imageUrl: "",},

  ];
  return (
    <CatalogGallery jewelryList={dummyData}/> 
  );
}
