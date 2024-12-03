import { SortOrder } from "../../util/SortOrder";

export type PosClosingEntryOrderByInput = {
  amendedFrom?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docStatus?: SortOrder;
  errorMessage?: SortOrder;
  grandTotal?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  netTotal?: SortOrder;
  owner?: SortOrder;
  periodEndDate?: SortOrder;
  periodStartDate?: SortOrder;
  posOpeningEntry?: SortOrder;
  posProfile?: SortOrder;
  postingDate?: SortOrder;
  postingTime?: SortOrder;
  status?: SortOrder;
  totalQuantity?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
