import { SortOrder } from "../../util/SortOrder";

export type PaymentEntryReferenceOrderByInput = {
  account?: SortOrder;
  accountType?: SortOrder;
  allocatedAmount?: SortOrder;
  billNo?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  dueDate?: SortOrder;
  exchangeGainLoss?: SortOrder;
  exchangeRate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  outstandingAmount?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  paymentTerm?: SortOrder;
  paymentType?: SortOrder;
  referenceDoctype?: SortOrder;
  referenceName?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};