import Link from "next/link";

export default function AddJewelryButton() {
  return (
    <Link
      className="w-auto mt-2 px-3 py-1 rounded-md text-nowrap bg-white text-yellow-500 text-xl hover:scale-105 hover:bg-yellow-500 hover:text-white hover:duration-300"
      href={"/alljewelry/create"}
    >
      Add Jewelry
    </Link>
  );
}
