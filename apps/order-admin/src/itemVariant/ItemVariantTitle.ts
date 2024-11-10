import { ItemVariant as TItemVariant } from "../api/itemVariant/ItemVariant";

export const ITEMVARIANT_TITLE_FIELD = "name";

export const ItemVariantTitle = (record: TItemVariant): string => {
  return record.name?.toString() || String(record.id);
};
