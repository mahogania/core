import { ItemScriptNames as TItemScriptNames } from "../api/itemScriptNames/ItemScriptNames";

export const ITEMSCRIPTNAMES_TITLE_FIELD = "id";

export const ItemScriptNamesTitle = (record: TItemScriptNames): string => {
  return record.id?.toString() || String(record.id);
};
