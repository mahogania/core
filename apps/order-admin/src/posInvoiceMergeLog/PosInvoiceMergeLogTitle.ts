import { PosInvoiceMergeLog as TPosInvoiceMergeLog } from "../api/posInvoiceMergeLog/PosInvoiceMergeLog";

export const POSINVOICEMERGELOG_TITLE_FIELD = "name";

export const PosInvoiceMergeLogTitle = (
  record: TPosInvoiceMergeLog
): string => {
  return record.name?.toString() || String(record.id);
};
