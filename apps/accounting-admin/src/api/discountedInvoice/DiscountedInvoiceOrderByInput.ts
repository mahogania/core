import { SortOrder } from "../../util/SortOrder";

export type DiscountedInvoiceOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  customer?: SortOrder;
  debitTo?: SortOrder;
  docstatus?: SortOrder;
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
  postingDate?: SortOrder;
  salesInvoice?: SortOrder;
  updatedAt?: SortOrder;
};
