import { ItemTax as TItemTax } from "../api/itemTax/ItemTax";

export const ITEMTAX_TITLE_FIELD = "name";

export const ItemTaxTitle = (record: TItemTax): string => {
  return record.name?.toString() || String(record.id);
};
