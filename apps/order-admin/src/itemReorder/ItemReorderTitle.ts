import { ItemReorder as TItemReorder } from "../api/itemReorder/ItemReorder";

export const ITEMREORDER_TITLE_FIELD = "name";

export const ItemReorderTitle = (record: TItemReorder): string => {
  return record.name?.toString() || String(record.id);
};
