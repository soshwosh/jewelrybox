"use client";
import NavBar from "../ui/catalognav/navbar";
import Header from "../ui/catalogheader/header";
import SearchBar from "../ui/cataloggallery/searchbar";
import usePagename from "../../hooks/usePagename";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pageName = usePagename();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>
      
      <div className="flex flex-col items-center w-full">
        <Header pageTitle={pageName} />

        <div className="flex flex-row justify-center items-center m-3 w-1/2">
          <div className="mx-3 w-full">
            <SearchBar />
          </div>

          <button className="w-auto text-nowrap bg-pink-500 px-3 py-1 rounded-md text-white text-xl m-2 hover:scale-105 hover:bg-pink-700 hover:duration-300">
            <Link href={"/alljewelry/create"}>Add Jewelry</Link>
          </button>
        </div>

        <div className="flex-grow w-full p-6 md:overflow-y-auto md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
