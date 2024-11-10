export type ProductionPlanItemCreateInput = {
  bomNo?: string | null;
  creation?: Date | null;
  description?: string | null;
  docstatus?: number | null;
  idx?: number | null;
  includeExplodedItems?: number | null;
  itemCode?: string | null;
  itemReference?: string | null;
  materialRequest?: string | null;
  materialRequestItem?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  orderedQty?: number | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  pendingQty?: number | null;
  plannedQty?: number | null;
  plannedStartDate?: Date | null;
  producedQty?: number | null;
  productBundleItem?: string | null;
  salesOrder?: string | null;
  salesOrderItem?: string | null;
  stockUom?: string | null;
  temporaryName?: string | null;
  warehouse?: string | null;
};
