import { Uom as TUom } from "../api/uom/Uom";

export const UOM_TITLE_FIELD = "name";

export const UomTitle = (record: TUom): string => {
  return record.name?.toString() || String(record.id);
};
