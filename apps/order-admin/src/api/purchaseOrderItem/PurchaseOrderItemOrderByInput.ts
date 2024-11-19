import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderItemOrderByInput = {
  actualQty?: SortOrder;
  againstBlanketOrder?: SortOrder;
  amount?: SortOrder;
  applyTds?: SortOrder;
  baseAmount?: SortOrder;
  baseNetAmount?: SortOrder;
  baseNetRate?: SortOrder;
  basePriceListRate?: SortOrder;
  baseRate?: SortOrder;
  baseRateWithMargin?: SortOrder;
  billedAmt?: SortOrder;
  blanketOrder?: SortOrder;
  blanketOrderRate?: SortOrder;
  bom?: SortOrder;
  brand?: SortOrder;
  companyTotalStock?: SortOrder;
  conversionFactor?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  deliveredBySupplier?: SortOrder;
  description?: SortOrder;
  discountAmount?: SortOrder;
  discountPercentage?: SortOrder;
  docstatus?: SortOrder;
  expectedDeliveryDate?: SortOrder;
  expenseAccount?: SortOrder;
  fgItem?: SortOrder;
  fgItemQty?: SortOrder;
  fromWarehouse?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  image?: SortOrder;
  includeExplodedItems?: SortOrder;
  isFixedAsset?: SortOrder;
  isFreeItem?: SortOrder;
  itemCode?: SortOrder;
  itemGroup?: SortOrder;
  itemName?: SortOrder;
  itemTaxRate?: SortOrder;
  itemTaxTemplate?: SortOrder;
  lastPurchaseRate?: SortOrder;
  manufacturer?: SortOrder;
  manufacturerPartNo?: SortOrder;
  marginRateOrAmount?: SortOrder;
  marginType?: SortOrder;
  materialRequest?: SortOrder;
  materialRequestItem?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  netAmount?: SortOrder;
  netRate?: SortOrder;
  owner?: SortOrder;
  pageBreak?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  priceListRate?: SortOrder;
  pricingRules?: SortOrder;
  productBundle?: SortOrder;
  productionPlan?: SortOrder;
  productionPlanItem?: SortOrder;
  productionPlanSubAssemblyItem?: SortOrder;
  project?: SortOrder;
  qty?: SortOrder;
  rate?: SortOrder;
  rateWithMargin?: SortOrder;
  receivedQty?: SortOrder;
  returnedQty?: SortOrder;
  salesOrder?: SortOrder;
  salesOrderItem?: SortOrder;
  salesOrderPackedItem?: SortOrder;
  scheduleDate?: SortOrder;
  stockQty?: SortOrder;
  stockUom?: SortOrder;
  stockUomRate?: SortOrder;
  supplierPartNo?: SortOrder;
  supplierQuotation?: SortOrder;
  supplierQuotationItem?: SortOrder;
  totalWeight?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
  warehouse?: SortOrder;
  weightPerUnit?: SortOrder;
  weightUom?: SortOrder;
  wipCompositeAsset?: SortOrder;
};