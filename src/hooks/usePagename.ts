'use client';
import { usePathname } from "next/navigation";

const usePagename = () => {
  const pathname = usePathname();
  const editRegex = new RegExp("^/alljewelry/\\d+/edit$");

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
  } else if (editRegex.test(pathname)) {
    return "Update a Jewelry Item";
  } else {
    return "Needs Header Title";
  }
};

export default usePagename;
