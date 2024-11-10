import { ItemAlternative as TItemAlternative } from "../api/itemAlternative/ItemAlternative";

export const ITEMALTERNATIVE_TITLE_FIELD = "alternativeItemName";

export const ItemAlternativeTitle = (record: TItemAlternative): string => {
  return record.alternativeItemName?.toString() || String(record.id);
};
