import { SerialNo as TSerialNo } from "../api/serialNo/SerialNo";

export const SERIALNO_TITLE_FIELD = "itemName";

export const SerialNoTitle = (record: TSerialNo): string => {
  return record.itemName?.toString() || String(record.id);
};
