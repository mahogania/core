import { ItemAttributeValue as TItemAttributeValue } from "../api/itemAttributeValue/ItemAttributeValue";

export const ITEMATTRIBUTEVALUE_TITLE_FIELD = "name";

export const ItemAttributeValueTitle = (
  record: TItemAttributeValue
): string => {
  return record.name?.toString() || String(record.id);
};
