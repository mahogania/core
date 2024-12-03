import { SortOrder } from "../../util/SortOrder";

export type BulkTransactionLogDetailOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  date?: SortOrder;
  docstatus?: SortOrder;
  errorDescription?: SortOrder;
  fromDoctype?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  retried?: SortOrder;
  time?: SortOrder;
  toDoctype?: SortOrder;
  transactionName?: SortOrder;
  transactionStatus?: SortOrder;
  updatedAt?: SortOrder;
};
