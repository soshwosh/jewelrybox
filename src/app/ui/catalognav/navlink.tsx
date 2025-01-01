"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
           {
            links.map((link) => {

                return (
                    <Link 
                     key={link.name} 
                     href={link.href}
                     className={`p-2 rounded-md text-white hover:bg-pink-600 ${pathname === link.href ? "bg-pink-700" : "bg-pink-500"}`}
                    >
                        {link.name}
                    </Link>
                );
            })
           }
        </>
    );
}
