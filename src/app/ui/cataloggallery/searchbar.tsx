export default function SearchBar({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex justify-center">
      <input
        type="search"
        name=""
        id=""
        placeholder={placeholder}
        className="bg-slate-100 w-full md:w-1/2 rounded-2xl px-3 py-2 my-5 outline-none"
      />
    </div>
  );
}
