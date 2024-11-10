import { SortOrder } from "../../util/SortOrder";

export type AssetMovementItemOrderByInput = {
  asset?: SortOrder;
  assetName?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  fromEmployee?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  sourceLocation?: SortOrder;
  targetLocation?: SortOrder;
  toEmployee?: SortOrder;
  updatedAt?: SortOrder;
};
