import { SortOrder } from "../../util/SortOrder";

export type DocShareOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  everyone?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  notifyByEmail?: SortOrder;
  owner?: SortOrder;
  read?: SortOrder;
  share?: SortOrder;
  shareDoctype?: SortOrder;
  shareName?: SortOrder;
  submit?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
  write?: SortOrder;
};
