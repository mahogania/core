import { SortOrder } from "../../util/SortOrder";

export type BomUpdateLogOrderByInput = {
  amendedFrom?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  currentBom?: SortOrder;
  currentLevel?: SortOrder;
  docstatus?: SortOrder;
  errorLog?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  newBom?: SortOrder;
  owner?: SortOrder;
  processedBoms?: SortOrder;
  status?: SortOrder;
  updateType?: SortOrder;
  updatedAt?: SortOrder;
};
