import { JewelryItemType } from "@/app/types/jewelryItemType";
import { fetchJewelryItemById } from "@/lib/dbutils";

export default async function Page(
    props: { params: Promise<{id: string}>}
) {
    const params = await props.params;
    const jewelryItem = await fetchJewelryItemById(Number(params.id));

    return (
      <div>
        {jewelryItem.id}
        {jewelryItem.name}
      </div>
    );
}