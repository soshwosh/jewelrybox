import { usePathname } from "next/navigation";

const usePagename = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return "Home";
  } else if (pathname === "/alljewelry") {
    return "All Jewelry";
  } else if (pathname === "/alljewelry/bracelets") {
    return "Bracelets";
  } else if (pathname === "/alljewelry/earrings") {
    return "Earrings";
  } else if (pathname === "/alljewelry/necklaces") {
    return "Necklaces";
  } else if (pathname === "/alljewelry/rings") {
    return "Rings";
  } else if (pathname === "/alljewelry/addJewelry") {
    return "Add Jewelry";
  } else if (pathname === "/alljewelry/create") {
    return "Add a New Jewelry Item";
  } else {
    return "";
  }
};

export default usePagename;
