import { SubcontractingReceipt as TSubcontractingReceipt } from "../api/subcontractingReceipt/SubcontractingReceipt";

export const SUBCONTRACTINGRECEIPT_TITLE_FIELD = "id";

export const SubcontractingReceiptTitle = (
  record: TSubcontractingReceipt
): string => {
  return record.id?.toString() || String(record.id);
};
