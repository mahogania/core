export type ProductionPlanUpdateInput = {
  amendedFrom?: string | null;
  combineItems?: number | null;
  combineSubItems?: number | null;
  company?: string | null;
  considerMinimumOrderQty?: number | null;
  creation?: Date | null;
  customer?: string | null;
  docstatus?: number | null;
  forWarehouse?: string | null;
  fromDate?: Date | null;
  fromDeliveryDate?: Date | null;
  getItemsFrom?: string | null;
  idx?: number | null;
  ignoreExistingOrderedQty?: number | null;
  includeNonStockItems?: number | null;
  includeSafetyStock?: number | null;
  includeSubcontractedItems?: number | null;
  itemCode?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  namingSeries?: string | null;
  owner?: string | null;
  postingDate?: Date | null;
  project?: string | null;
  salesOrderStatus?: string | null;
  skipAvailableSubAssemblyItem?: number | null;
  status?: string | null;
  subAssemblyWarehouse?: string | null;
  toDate?: Date | null;
  toDeliveryDate?: Date | null;
  totalPlannedQty?: number | null;
  totalProducedQty?: number | null;
  warehouse?: string | null;
};
