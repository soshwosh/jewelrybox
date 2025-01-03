import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-pink-300">
      <h1 className="text-5xl text-white">Jewelry Box</h1>
      <div className="flex flex-col m-5 w-1/2 sm:w-1/3 md:w-1/6 bg-pink-500 p-4 rounded-lg">
        <button
          className="w-auto bg-pink-700 px-3 py-1 rounded-md text-white text-xl m-2 hover:bg-pink-200 hover:text-black"
          type="submit"
        >
          <Link href="/alljewelry">Log In</Link>
        </button>
        <button
          className="bg-pink-700 px-3 py-1 rounded-md text-white text-xl m-2 hover:bg-pink-200 hover:text-black"
          type="submit"
        >
          <Link href="/alljewelry">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}
