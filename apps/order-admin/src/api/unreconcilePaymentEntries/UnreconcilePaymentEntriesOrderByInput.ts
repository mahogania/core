import { SortOrder } from "../../util/SortOrder";

export type UnreconcilePaymentEntriesOrderByInput = {
  account?: SortOrder;
  accountCurrency?: SortOrder;
  allocatedAmount?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  party?: SortOrder;
  partyType?: SortOrder;
  referenceDoctype?: SortOrder;
  referenceName?: SortOrder;
  unlinked?: SortOrder;
  updatedAt?: SortOrder;
};
