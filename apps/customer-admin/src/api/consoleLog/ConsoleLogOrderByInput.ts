import { SortOrder } from "../../util/SortOrder";

export type ConsoleLogOrderByInput = {
  committed?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  script?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
