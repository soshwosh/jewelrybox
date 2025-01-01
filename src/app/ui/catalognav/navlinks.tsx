"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkType } from "@/app/types/linkType";
import { FC } from "react";


interface Props {
  links: LinkType[];
}

const NavLinks: FC<Props> = ({links}) => {
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

export default NavLinks;