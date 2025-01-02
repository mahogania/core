export type StockLedgerEntryCreateInput = {
  actualQty?: number | null;
  autoCreatedSerialAndBatchBundle?: boolean | null;
  batchNo?: string | null;
  company?: string | null;
  creation?: Date | null;
  dependantSleVoucherDetailNo?: string | null;
  docstatus?: number | null;
  fiscalYear?: string | null;
  hasBatchNo?: boolean | null;
  hasSerialNo?: boolean | null;
  idx?: number | null;
  incomingRate?: number | null;
  isAdjustmentEntry?: boolean | null;
  isCancelled?: boolean | null;
  itemCode?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  outgoingRate?: number | null;
  owner?: string | null;
  postingDate?: Date | null;
  postingDatetime?: Date | null;
  postingTime?: Date | null;
  project?: string | null;
  qtyAfterTransaction?: number | null;
  recalculateRate?: boolean | null;
  serialAndBatchBundle?: string | null;
  serialNo?: string | null;
  stockQueue?: string | null;
  stockUom?: string | null;
  stockValue?: number | null;
  stockValueDifference?: number | null;
  toRename?: boolean | null;
  valuationRate?: number | null;
  voucherDetailNo?: string | null;
  voucherNo?: string | null;
  voucherType?: string | null;
  warehouse?: string | null;
};