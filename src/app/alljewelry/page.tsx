import CatalogGallery from "@/app/ui/cataloggallery/cataloggallery";
import { fetchAllJewelryItems, addJewelryItem } from "@/lib/dbutils";
import SearchBar from "../ui/cataloggallery/searchbar";
// import {AddJewelryForm} from "@/app/ui/addjewelryform/addjewelryform";

export default async function Page() {
  const jewelryData = await fetchAllJewelryItems();

  const newData = await addJewelryItem(
    999,
    999,
    "organized chaos choker",
    "necklace",
    "gold",
    "multcolor",
    "",
    "",
    "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  );

  // const dummyData = [
  //   {
  //     id: 1,
  //     userid: 1,
  //     name: "organized chaos choker",
  //     type: "necklace",
  //     material: "gold",
  //     color: "multcolor",
  //     brand: "",
  //     notes: "",
  //     imageUrl:
  //       "https://i.pinimg.com/236x/63/d9/48/63d948ba8742b4cdeeff483a35e12918.jpg",
  //   },
  //   {
  //     id: 2,
  //     userid: 2,
  //     name: "Enamel Flower Hoops",
  //     type: "earring",
  //     material: "gold",
  //     color: "multcolor",
  //     brand: "Closionne",
  //     notes: "Gift from Mom Xmas 2024",
  //     imageUrl:
  //       "https://i.pinimg.com/236x/61/48/4b/61484bf69a752c0c5098e91bc2f006d6.jpg",
  //   },
  // ];

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-3">
        <SearchBar />
        {/* <AddJewelryForm createJewelryItem={createJewelryItem} /> */}
      </div>
      <button onClick={console.log(newData)!}>Add Test</button>
      <CatalogGallery jewelryList={jewelryData} />
    </div>
  );
}
