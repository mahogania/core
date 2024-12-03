import { SortOrder } from "../../util/SortOrder";

export type CashierClosingPaymentsOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modeOfPayment?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  updatedAt?: SortOrder;
};
