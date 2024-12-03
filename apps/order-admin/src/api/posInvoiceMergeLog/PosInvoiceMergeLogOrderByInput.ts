import { SortOrder } from "../../util/SortOrder";

export type PosInvoiceMergeLogOrderByInput = {
  amendedFrom?: SortOrder;
  consolidatedCreditNote?: SortOrder;
  consolidatedInvoice?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customer?: SortOrder;
  customerGroup?: SortOrder;
  docStatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  mergeInvoicesBasedOn?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  posClosingEntry?: SortOrder;
  postingDate?: SortOrder;
  postingTime?: SortOrder;
  updatedAt?: SortOrder;
};
