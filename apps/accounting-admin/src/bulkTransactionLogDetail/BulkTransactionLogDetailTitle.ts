import { BulkTransactionLogDetail as TBulkTransactionLogDetail } from "../api/bulkTransactionLogDetail/BulkTransactionLogDetail";

export const BULKTRANSACTIONLOGDETAIL_TITLE_FIELD = "name";

export const BulkTransactionLogDetailTitle = (
  record: TBulkTransactionLogDetail
): string => {
  return record.name?.toString() || String(record.id);
};
