import { SubcontractingReceiptItem as TSubcontractingReceiptItem } from "../api/subcontractingReceiptItem/SubcontractingReceiptItem";

export const SUBCONTRACTINGRECEIPTITEM_TITLE_FIELD = "id";

export const SubcontractingReceiptItemTitle = (
  record: TSubcontractingReceiptItem
): string => {
  return record.id?.toString() || String(record.id);
};
