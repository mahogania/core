import { SortOrder } from "../../util/SortOrder";

export type PaymentReconciliationLogAllocationOrderByInput = {
  allocatedAmount?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  currency?: SortOrder;
  differenceAccount?: SortOrder;
  differenceAmount?: SortOrder;
  docstatus?: SortOrder;
  exchangeRate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  invoiceNumber?: SortOrder;
  invoiceType?: SortOrder;
  isAdvance?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  reconciled?: SortOrder;
  referenceName?: SortOrder;
  referenceRow?: SortOrder;
  referenceType?: SortOrder;
  unreconciledAmount?: SortOrder;
  updatedAt?: SortOrder;
};
