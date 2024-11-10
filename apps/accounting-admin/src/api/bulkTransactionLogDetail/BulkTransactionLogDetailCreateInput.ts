export type BulkTransactionLogDetailCreateInput = {
  creation?: Date | null;
  date?: Date | null;
  docstatus?: number | null;
  errorDescription?: string | null;
  fromDoctype?: string | null;
  idx?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  retried?: number | null;
  time?: Date | null;
  toDoctype?: string | null;
  transactionName?: string | null;
  transactionStatus?: string | null;
};
