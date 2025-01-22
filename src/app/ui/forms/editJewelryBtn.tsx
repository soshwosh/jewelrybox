import Link from "next/link";
import ModeIcon from "@mui/icons-material/Mode";

export default function EditJewelryButton({ id }: { id: string }) {
  return (
    <Link
      href={`/alljewelry/${id}/edit`}
      className="absolute top-0 right-11 px-2 py-1 m-2 bg-gray-400 text-white rounded-md hover:bg-green-500 hover:duration-300"
    >
      <ModeIcon className="w-5 h-5" />
    </Link>
  );
}
