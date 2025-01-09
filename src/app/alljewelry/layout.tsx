"use client";
import NavBar from "../ui/catalognav/navbar";
import Header from "../ui/catalogheader/header";
import SearchBar from "../ui/cataloggallery/searchbar";
import usePagename from "../../hooks/usePagename";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AddJewelryButton from "../ui/addJewelryComponents/addJewelryBtn";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pageName = usePagename();
  const pathname = usePathname();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>

      <div className="flex flex-col items-center w-full">
        <Header pageTitle={pageName} />

        {/* {pathname !== "/alljewelry/create" && (
          <div className="flex flex-col justify-center items-center m-4 w-full md:flex-row md:w-1/2">
            <SearchBar />

            <AddJewelryButton/>
          </div>
        )} */}

        <div className="flex-grow w-full p-6 md:overflow-y-auto md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
