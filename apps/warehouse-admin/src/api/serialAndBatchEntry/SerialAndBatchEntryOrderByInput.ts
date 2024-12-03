import { SortOrder } from "../../util/SortOrder";

export type SerialAndBatchEntryOrderByInput = {
  batchNo?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  deliveredQty?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  incomingRate?: SortOrder;
  isOutward?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  outgoingRate?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  qty?: SortOrder;
  serialNo?: SortOrder;
  stockQueue?: SortOrder;
  stockValueDifference?: SortOrder;
  updatedAt?: SortOrder;
  warehouse?: SortOrder;
};
