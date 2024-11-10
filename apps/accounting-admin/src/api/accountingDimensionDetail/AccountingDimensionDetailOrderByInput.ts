import { SortOrder } from "../../util/SortOrder";

export type AccountingDimensionDetailOrderByInput = {
  automaticallyPostBalancingAccountingEntry?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  defaultDimension?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  mandatoryForBs?: SortOrder;
  mandatoryForPl?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  offsettingAccount?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  referenceDocument?: SortOrder;
  updatedAt?: SortOrder;
};
