import { SortOrder } from "../../util/SortOrder";

export type PaymentLedgerEntryOrderByInput = {
  account?: SortOrder;
  accountCurrency?: SortOrder;
  accountType?: SortOrder;
  againstVoucherNo?: SortOrder;
  againstVoucherType?: SortOrder;
  amount?: SortOrder;
  amountInAccountCurrency?: SortOrder;
  company?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  delinked?: SortOrder;
  docstatus?: SortOrder;
  dueDate?: SortOrder;
  financeBook?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  party?: SortOrder;
  partyType?: SortOrder;
  postingDate?: SortOrder;
  remarks?: SortOrder;
  updatedAt?: SortOrder;
  voucherDetailNo?: SortOrder;
  voucherNo?: SortOrder;
  voucherType?: SortOrder;
};