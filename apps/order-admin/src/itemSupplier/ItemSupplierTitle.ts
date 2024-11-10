import { ItemSupplier as TItemSupplier } from "../api/itemSupplier/ItemSupplier";

export const ITEMSUPPLIER_TITLE_FIELD = "name";

export const ItemSupplierTitle = (record: TItemSupplier): string => {
  return record.name?.toString() || String(record.id);
};
