export type PurchaseOrderItemCreateInput = {
  actualQty?: number | null;
  againstBlanketOrder?: number | null;
  amount?: number | null;
  applyTds?: number | null;
  baseAmount?: number | null;
  baseNetAmount?: number | null;
  baseNetRate?: number | null;
  basePriceListRate?: number | null;
  baseRate?: number | null;
  baseRateWithMargin?: number | null;
  billedAmt?: number | null;
  blanketOrder?: string | null;
  blanketOrderRate?: number | null;
  bom?: string | null;
  brand?: string | null;
  companyTotalStock?: number | null;
  conversionFactor?: number | null;
  costCenter?: string | null;
  creation?: Date | null;
  deliveredBySupplier?: number | null;
  description?: string | null;
  discountAmount?: number | null;
  discountPercentage?: number | null;
  docstatus?: number | null;
  expectedDeliveryDate?: Date | null;
  expenseAccount?: string | null;
  fgItem?: string | null;
  fgItemQty?: number | null;
  fromWarehouse?: string | null;
  idx?: number | null;
  image?: string | null;
  includeExplodedItems?: number | null;
  isFixedAsset?: number | null;
  isFreeItem?: number | null;
  itemCode?: string | null;
  itemGroup?: string | null;
  itemName?: string | null;
  itemTaxRate?: string | null;
  itemTaxTemplate?: string | null;
  lastPurchaseRate?: number | null;
  manufacturer?: string | null;
  manufacturerPartNo?: string | null;
  marginRateOrAmount?: number | null;
  marginType?: string | null;
  materialRequest?: string | null;
  materialRequestItem?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  netAmount?: number | null;
  netRate?: number | null;
  owner?: string | null;
  pageBreak?: number | null;
  parent?: string | null;
  parentField?: string | null;
  parentType?: string | null;
  priceListRate?: number | null;
  pricingRules?: string | null;
  productBundle?: string | null;
  productionPlan?: string | null;
  productionPlanItem?: string | null;
  productionPlanSubAssemblyItem?: string | null;
  project?: string | null;
  qty?: number | null;
  rate?: number | null;
  rateWithMargin?: number | null;
  receivedQty?: number | null;
  returnedQty?: number | null;
  salesOrder?: string | null;
  salesOrderItem?: string | null;
  salesOrderPackedItem?: string | null;
  scheduleDate?: Date | null;
  stockQty?: number | null;
  stockUom?: string | null;
  stockUomRate?: number | null;
  supplierPartNo?: string | null;
  supplierQuotation?: string | null;
  supplierQuotationItem?: string | null;
  totalWeight?: number | null;
  uom?: string | null;
  warehouse?: string | null;
  weightPerUnit?: number | null;
  weightUom?: string | null;
  wipCompositeAsset?: string | null;
};
