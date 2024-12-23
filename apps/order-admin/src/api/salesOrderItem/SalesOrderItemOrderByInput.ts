import { SortOrder } from "../../util/SortOrder";

export type SalesOrderItemOrderByInput = {
  actualQty?: SortOrder;
  additionalNotes?: SortOrder;
  againstBlanketOrder?: SortOrder;
  amount?: SortOrder;
  baseAmount?: SortOrder;
  baseNetAmount?: SortOrder;
  baseNetRate?: SortOrder;
  basePriceListRate?: SortOrder;
  baseRate?: SortOrder;
  baseRateWithMargin?: SortOrder;
  billedAmt?: SortOrder;
  blanketOrder?: SortOrder;
  blanketOrderRate?: SortOrder;
  bomNo?: SortOrder;
  brand?: SortOrder;
  conversionFactor?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customerItemCode?: SortOrder;
  deliveredBySupplier?: SortOrder;
  deliveredQty?: SortOrder;
  deliveryDate?: SortOrder;
  description?: SortOrder;
  discountAmount?: SortOrder;
  discountPercentage?: SortOrder;
  docstatus?: SortOrder;
  ensureDeliveryBasedOnProducedSerialNo?: SortOrder;
  grantCommission?: SortOrder;
  grossProfit?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  image?: SortOrder;
  isFreeItem?: SortOrder;
  isStockItem?: SortOrder;
  itemCode?: SortOrder;
  itemGroup?: SortOrder;
  itemName?: SortOrder;
  itemTaxRate?: SortOrder;
  itemTaxTemplate?: SortOrder;
  marginRateOrAmount?: SortOrder;
  marginType?: SortOrder;
  materialRequest?: SortOrder;
  materialRequestItem?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  netAmount?: SortOrder;
  netRate?: SortOrder;
  orderedQty?: SortOrder;
  owner?: SortOrder;
  pageBreak?: SortOrder;
  parent?: SortOrder;
  parentField?: SortOrder;
  parentType?: SortOrder;
  pickedQty?: SortOrder;
  plannedQty?: SortOrder;
  prevdocDocname?: SortOrder;
  priceListRate?: SortOrder;
  pricingRules?: SortOrder;
  producedQty?: SortOrder;
  productionPlanQty?: SortOrder;
  projectedQty?: SortOrder;
  purchaseOrder?: SortOrder;
  purchaseOrderItem?: SortOrder;
  qty?: SortOrder;
  quotationItem?: SortOrder;
  rate?: SortOrder;
  rateWithMargin?: SortOrder;
  reserveStock?: SortOrder;
  returnedQty?: SortOrder;
  stockQty?: SortOrder;
  stockReservedQty?: SortOrder;
  stockUom?: SortOrder;
  stockUomRate?: SortOrder;
  supplier?: SortOrder;
  targetWarehouse?: SortOrder;
  totalWeight?: SortOrder;
  transactionDate?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
  valuationRate?: SortOrder;
  warehouse?: SortOrder;
  weightPerUnit?: SortOrder;
  weightUom?: SortOrder;
  workOrderQty?: SortOrder;
};
