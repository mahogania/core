import { SortOrder } from "../../util/SortOrder";

export type LedgerHealthOrderByInput = {
  checkedOn?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  debitCreditMismatch?: SortOrder;
  docstatus?: SortOrder;
  generalAndPaymentLedgerMismatch?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
  voucherNo?: SortOrder;
  voucherType?: SortOrder;
};
