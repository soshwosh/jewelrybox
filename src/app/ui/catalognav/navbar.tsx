import NavLinks from "./navlinks";

// TODO: Store in database and fetch

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "All Jewelry",
    href: "/catalog/alljewelry",
  },
  {
    name: "Bracelets",
    href: "/catalog/bracelets",
  },
  {
    name: "Earrings",
    href: "/catalog/earrings",
  },
  {
    name: "Necklaces",
    href: "/catalog/necklaces",
  },
  {
    name: "Rings",
    href: "/catalog/rings",
  },
];

export default function NavBar() {
  return (
    <div className="flex h-full flex-col p-3 bg-pink-500">
      <NavLinks links={links}/>
    
    </div>
  );
}

