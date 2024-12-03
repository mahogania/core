import { SortOrder } from "../../util/SortOrder";

export type PurchaseInvoiceAdvanceOrderByInput = {
  advanceAmount?: SortOrder;
  allocatedAmount?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  exchangeGainLoss?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  refExchangeRate?: SortOrder;
  referenceName?: SortOrder;
  referenceRow?: SortOrder;
  referenceType?: SortOrder;
  remarks?: SortOrder;
  updatedAt?: SortOrder;
};
