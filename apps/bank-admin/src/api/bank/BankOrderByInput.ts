import { SortOrder } from "../../util/SortOrder";

export type BankOrderByInput = {
  bankName?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  plaidAccessToken?: SortOrder;
  swiftNumber?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
