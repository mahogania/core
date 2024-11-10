import { ItemPrice as TItemPrice } from "../api/itemPrice/ItemPrice";

export const ITEMPRICE_TITLE_FIELD = "itemName";

export const ItemPriceTitle = (record: TItemPrice): string => {
  return record.itemName?.toString() || String(record.id);
};
