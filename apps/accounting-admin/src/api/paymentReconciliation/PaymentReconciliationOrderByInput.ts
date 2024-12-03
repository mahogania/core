import { SortOrder } from "../../util/SortOrder";

export type PaymentReconciliationOrderByInput = {
  amendedFrom?: SortOrder;
  bankCashAccount?: SortOrder;
  company?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  defaultAdvanceAccount?: SortOrder;
  docstatus?: SortOrder;
  errorLog?: SortOrder;
  fromInvoiceDate?: SortOrder;
  fromPaymentDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  party?: SortOrder;
  partyType?: SortOrder;
  receivablePayableAccount?: SortOrder;
  status?: SortOrder;
  toInvoiceDate?: SortOrder;
  toPaymentDate?: SortOrder;
  updatedAt?: SortOrder;
};
