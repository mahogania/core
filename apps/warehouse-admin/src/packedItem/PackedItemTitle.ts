import { PackedItem as TPackedItem } from "../api/packedItem/PackedItem";

export const PACKEDITEM_TITLE_FIELD = "itemName";

export const PackedItemTitle = (record: TPackedItem): string => {
  return record.itemName?.toString() || String(record.id);
};
