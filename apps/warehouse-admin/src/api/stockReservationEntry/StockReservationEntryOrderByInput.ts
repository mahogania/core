import { SortOrder } from "../../util/SortOrder";

export type StockReservationEntryOrderByInput = {
  amendedFrom?: SortOrder;
  availableQty?: SortOrder;
  company?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  deliveredQty?: SortOrder;
  docstatus?: SortOrder;
  fromVoucherDetailNo?: SortOrder;
  fromVoucherNo?: SortOrder;
  fromVoucherType?: SortOrder;
  hasBatchNo?: SortOrder;
  hasSerialNo?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  itemCode?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  project?: SortOrder;
  reservationBasedOn?: SortOrder;
  reservedQty?: SortOrder;
  status?: SortOrder;
  stockUom?: SortOrder;
  updatedAt?: SortOrder;
  voucherDetailNo?: SortOrder;
  voucherNo?: SortOrder;
  voucherQty?: SortOrder;
  voucherType?: SortOrder;
  warehouse?: SortOrder;
};