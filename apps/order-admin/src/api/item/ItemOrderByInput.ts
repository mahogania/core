import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  allowAlternativeItem?: SortOrder;
  autoCreateAssets?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  disabled?: SortOrder;
  docstatus?: SortOrder;
  hasVariants?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isFixedAsset?: SortOrder;
  isGroupedAsset?: SortOrder;
  isStockItem?: SortOrder;
  itemCode?: SortOrder;
  itemGroup?: SortOrder;
  itemName?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  namingSeries?: SortOrder;
  openingStock?: SortOrder;
  owner?: SortOrder;
  standardRate?: SortOrder;
  stockUom?: SortOrder;
  updatedAt?: SortOrder;
  valuationRate?: SortOrder;
};
