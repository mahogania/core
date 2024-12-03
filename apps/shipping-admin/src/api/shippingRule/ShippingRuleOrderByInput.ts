import { SortOrder } from "../../util/SortOrder";

export type ShippingRuleOrderByInput = {
  account?: SortOrder;
  calculateBasedOn?: SortOrder;
  company?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  label?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  shippingAmount?: SortOrder;
  shippingRuleType?: SortOrder;
  updatedAt?: SortOrder;
};
