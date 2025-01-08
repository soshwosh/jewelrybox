import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-white via-pink-500 to-yellow-500">
      <h1 className="text-5xl text-white">Jewelry Box</h1>
      <div className="flex flex-col m-5 w-1/2 sm:w-1/3 md:w-1/6 bg-white/20 p-4 rounded-lg">
        <Link
          key="/alljewelrylogin"
          href="/alljewelry"
          className="w-auto text-center bg-pink-600 px-3 py-1 rounded-md text-white text-xl m-2 hover:duration-300 hover:bg-white hover:text-pink-500"
        >
          Log In
        </Link>
        <Link
          key="/alljewelry"
          href="/alljewelry"
          className="w-auto text-center bg-pink-600 px-3 py-1 rounded-md text-white text-xl m-2 hover:duration-300 hover:bg-white hover:text-pink-500"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
