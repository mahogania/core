import { SortOrder } from "../../util/SortOrder";

export type BankTransactionPaymentsOrderByInput = {
  allocatedAmount?: SortOrder;
  clearanceDate?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  paymentDocument?: SortOrder;
  paymentEntry?: SortOrder;
  updatedAt?: SortOrder;
};
