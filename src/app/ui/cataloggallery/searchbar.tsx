"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(input: string) {
    const params = new URLSearchParams(searchParams);

    if (input) {
      params.set("query", input);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-center">
      <input
        type="search"
        name=""
        id=""
        placeholder={placeholder}
        className="bg-slate-100 w-full md:w-1/2 rounded-2xl px-3 py-2 my-5 outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
