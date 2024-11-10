import { SortOrder } from "../../util/SortOrder";

export type InstallationNoteItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  itemCode?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  prevdocDetailDocname?: SortOrder;
  prevdocDocname?: SortOrder;
  prevdocDoctype?: SortOrder;
  qty?: SortOrder;
  serialAndBatchBundle?: SortOrder;
  serialNo?: SortOrder;
  updatedAt?: SortOrder;
};
