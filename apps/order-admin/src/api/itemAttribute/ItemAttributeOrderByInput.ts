import { SortOrder } from "../../util/SortOrder";

export type ItemAttributeOrderByInput = {
  attributeName?: SortOrder;
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  fromRange?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  increment?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  numericValues?: SortOrder;
  owner?: SortOrder;
  toRange?: SortOrder;
  updatedAt?: SortOrder;
};
