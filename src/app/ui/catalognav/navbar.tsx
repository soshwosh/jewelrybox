import AddJewelryButton from "../forms/addJewelryBtn";
import NavLinks from "./navlinks";

// TODO: Store in database and fetch

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "All Jewelry",
    href: "/alljewelry",
  },
  {
    name: "Bracelets",
    href: "/alljewelry/bracelets",
  },
  {
    name: "Earrings",
    href: "/alljewelry/earrings",
  },
  {
    name: "Necklaces",
    href: "/alljewelry/necklaces",
  },
  {
    name: "Rings",
    href: "/alljewelry/rings",
  },
];

export default function NavBar() {
  return (
    <div className="flex h-full flex-col p-3 bg-pink-500">
      <NavLinks links={links} />
      <AddJewelryButton />
    </div>
  );
}
