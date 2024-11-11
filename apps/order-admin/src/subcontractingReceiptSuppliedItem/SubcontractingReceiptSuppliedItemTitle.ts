import { SubcontractingReceiptSuppliedItem as TSubcontractingReceiptSuppliedItem } from "../api/subcontractingReceiptSuppliedItem/SubcontractingReceiptSuppliedItem";

export const SUBCONTRACTINGRECEIPTSUPPLIEDITEM_TITLE_FIELD = "id";

export const SubcontractingReceiptSuppliedItemTitle = (
  record: TSubcontractingReceiptSuppliedItem
): string => {
  return record.id?.toString() || String(record.id);
};
