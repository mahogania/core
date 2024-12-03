import { SortOrder } from "../../util/SortOrder";

export type UomOrderByInput = {
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modifiedBy?: SortOrder;
  mustBeWholeNumber?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  uomName?: SortOrder;
  updatedAt?: SortOrder;
};
