import Link from "next/link";
import NavLinks from "./navlink";

export default function NavBar() {
  return (
    <div className="flex h-full flex-col p-3 m-1 bg-pink-500">
      {/* <Link href="/">Home</Link>
      <Link href="/catalog/alljewelry">All Jewelry</Link>
      <Link href="/catalog/bracelets">Bracelets</Link>
      <Link href="/catalog/earrings">Earrings</Link>
      <Link href="/catalog/necklaces">Necklaces</Link>
      <Link href="/catalog/rings">Rings</Link> */}
      <NavLinks/>
    
    </div>
  );
}
