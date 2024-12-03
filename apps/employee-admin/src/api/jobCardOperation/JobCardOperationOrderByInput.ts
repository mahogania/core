import { SortOrder } from "../../util/SortOrder";

export type JobCardOperationOrderByInput = {
  completedQty?: SortOrder;
  completedTime?: SortOrder;
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
  status?: SortOrder;
  subOperation?: SortOrder;
  updatedAt?: SortOrder;
};
