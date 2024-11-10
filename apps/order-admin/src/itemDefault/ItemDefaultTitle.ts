import { ItemDefault as TItemDefault } from "../api/itemDefault/ItemDefault";

export const ITEMDEFAULT_TITLE_FIELD = "name";

export const ItemDefaultTitle = (record: TItemDefault): string => {
  return record.name?.toString() || String(record.id);
};
