// "use client";
import NavBar from "../ui/catalognav/navbar";
import Header from "../ui/catalogheader/header";
// import usePagename from "../../hooks/usePagename";

export default function Layout({ children }: { children: React.ReactNode }) {
  // const pageName = usePagename();
  const pageName= "PLACEHOLDER"

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <NavBar />
      </div>

      <div className="flex flex-col items-center w-full">
        <Header pageTitle={pageName} />

        <div className="flex-grow w-full p-6 md:overflow-y-auto md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
