import { PosInvoiceItem as TPosInvoiceItem } from "../api/posInvoiceItem/PosInvoiceItem";

export const POSINVOICEITEM_TITLE_FIELD = "itemName";

export const PosInvoiceItemTitle = (record: TPosInvoiceItem): string => {
  return record.itemName?.toString() || String(record.id);
};
