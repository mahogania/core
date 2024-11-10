import { SortOrder } from "../../util/SortOrder";

export type LandedCostItemOrderByInput = {
  amount?: SortOrder;
  applicableCharges?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isFixedAsset?: SortOrder;
  itemCode?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  purchaseReceiptItem?: SortOrder;
  qty?: SortOrder;
  rate?: SortOrder;
  receiptDocument?: SortOrder;
  receiptDocumentType?: SortOrder;
  updatedAt?: SortOrder;
};
