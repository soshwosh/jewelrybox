import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
// import a db util function to fetch al jewelry items

export default function Page() {
  // call db util function, store return obj of all jewelry items in a variable
  const dummyData = [
    {
      id: 1,
      userid: 1,
      name: "organized chaos choker",
      type: "necklace",
      material: "gold",
      color: "multcolor",
      brand: "",
      notes: "",
      imageUrl:
        "https://i.pinimg.com/236x/63/d9/48/63d948ba8742b4cdeeff483a35e12918.jpg",
    },
    {
      id: 2,
      userid: 2,
      name: "Enamel Flower Hoops",
      type: "earring",
      material: "gold",
      color: "multcolor",
      brand: "Closionne",
      notes: "Gift from Mom Xmas 2024",
      imageUrl:
        "https://i.pinimg.com/236x/61/48/4b/61484bf69a752c0c5098e91bc2f006d6.jpg",
    },
  ];
  return <CatalogGallery jewelryList={dummyData} />;
}
