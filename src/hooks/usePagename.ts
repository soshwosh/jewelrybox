import { usePathname } from "next/navigation";

const usePagename = () => {
    const pathname = usePathname();
     
    if (pathname === "/") {
      return "Home";
    } else if (pathname === "/catalog/alljewelry") {
      return "All Jewelry";
    } else if (pathname === "/catalog/bracelets") {
      return "Bracelets";
    } else if (pathname === "/catalog/earrings") {
      return "Earrings";
    } else if (pathname === "/catalog/necklaces") {
      return "Necklaces";
    } else if (pathname === "/catalog/rings") {
      return "Rings";
    } else {
        return ""
    }
};

export default usePagename;