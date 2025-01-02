import { SortOrder } from "../../util/SortOrder";

export type StockLedgerEntryOrderByInput = {
  actualQty?: SortOrder;
  autoCreatedSerialAndBatchBundle?: SortOrder;
  batchNo?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  dependantSleVoucherDetailNo?: SortOrder;
  docstatus?: SortOrder;
  fiscalYear?: SortOrder;
  hasBatchNo?: SortOrder;
  hasSerialNo?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  incomingRate?: SortOrder;
  isAdjustmentEntry?: SortOrder;
  isCancelled?: SortOrder;
  itemCode?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  outgoingRate?: SortOrder;
  owner?: SortOrder;
  postingDate?: SortOrder;
  postingDatetime?: SortOrder;
  postingTime?: SortOrder;
  project?: SortOrder;
  qtyAfterTransaction?: SortOrder;
  recalculateRate?: SortOrder;
  serialAndBatchBundle?: SortOrder;
  serialNo?: SortOrder;
  stockQueue?: SortOrder;
  stockUom?: SortOrder;
  stockValue?: SortOrder;
  stockValueDifference?: SortOrder;
  toRename?: SortOrder;
  updatedAt?: SortOrder;
  valuationRate?: SortOrder;
  voucherDetailNo?: SortOrder;
  voucherNo?: SortOrder;
  voucherType?: SortOrder;
  warehouse?: SortOrder;
};