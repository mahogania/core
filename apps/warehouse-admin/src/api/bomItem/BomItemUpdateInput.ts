export type BomItemUpdateInput = {
  allowAlternativeItem?: boolean | null;
  amount?: number | null;
  baseAmount?: number | null;
  baseRate?: number | null;
  bomNo?: string | null;
  conversionFactor?: number | null;
  creation?: Date | null;
  description?: string | null;
  doNotExplode?: boolean | null;
  docstatus?: number | null;
  hasVariants?: boolean | null;
  idx?: number | null;
  image?: string | null;
  includeItemInManufacturing?: boolean | null;
  isStockItem?: boolean | null;
  itemCode?: string | null;
  itemName?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  operation?: string | null;
  originalItem?: string | null;
  owner?: string | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  qty?: number | null;
  qtyConsumedPerUnit?: number | null;
  rate?: number | null;
  sourceWarehouse?: string | null;
  sourcedBySupplier?: boolean | null;
  stockQty?: number | null;
  stockUom?: string | null;
  uom?: string | null;
};
