import { SortOrder } from "../../util/SortOrder";

export type AssetActivityOrderByInput = {
  asset?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  date?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
