import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountCurrency?: SortOrder;
  accountName?: SortOrder;
  accountNumber?: SortOrder;
  accountType?: SortOrder;
  assign?: SortOrder;
  balanceMustBe?: SortOrder;
  comments?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  freezeAccount?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  includeInGross?: SortOrder;
  isGroup?: SortOrder;
  lft?: SortOrder;
  likedBy?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  oldParent?: SortOrder;
  owner?: SortOrder;
  parentAccount?: SortOrder;
  reportType?: SortOrder;
  rgt?: SortOrder;
  rootType?: SortOrder;
  taxRate?: SortOrder;
  updatedAt?: SortOrder;
  userTags?: SortOrder;
};
