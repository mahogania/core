import { SortOrder } from "../../util/SortOrder";

export type ItemTaxOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  itemTaxTemplate?: SortOrder;
  maximumNetRate?: SortOrder;
  minimumNetRate?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  taxCategory?: SortOrder;
  updatedAt?: SortOrder;
  validFrom?: SortOrder;
};
