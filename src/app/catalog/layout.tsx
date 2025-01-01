"use client";
import NavBar from "../ui/catalognav/navbar";
import Header from "../ui/catalogheader/header";
import { usePathname } from "next/navigation";


export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>
      <div className="flex flex-col w-full">
        <Header pageTitle={pathName} />
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
