import { Bom as TBom } from "../api/bom/Bom";

export const BOM_TITLE_FIELD = "itemName";

export const BomTitle = (record: TBom): string => {
  return record.itemName?.toString() || String(record.id);
};
