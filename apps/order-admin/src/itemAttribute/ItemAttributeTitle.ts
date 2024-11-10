import { ItemAttribute as TItemAttribute } from "../api/itemAttribute/ItemAttribute";

export const ITEMATTRIBUTE_TITLE_FIELD = "attributeName";

export const ItemAttributeTitle = (record: TItemAttribute): string => {
  return record.attributeName?.toString() || String(record.id);
};
