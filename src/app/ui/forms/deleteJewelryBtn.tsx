import DeleteIcon from "@mui/icons-material/Delete";
import { deleteJewelryItem } from "@/lib/actions";

export default function DeleteJewelryButton({ id }: { id: string }) {
  const deleteJewelryItemWithId = deleteJewelryItem.bind(null, id);

  return (
    <form
      className="absolute top-0 right-0 px-2 py-1 m-2 bg-gray-400 text-white rounded-md hover:bg-red-500 hover:duration-300"
      action={deleteJewelryItemWithId}
    >
      <button>
        <DeleteIcon className="w-5 h-5" />
      </button>
    </form>
  );
}
