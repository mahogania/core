export type PurchaseReceiptItemUpdateInput = {
  allowZeroValuationRate?: number | null;
  amount?: number | null;
  applyTds?: number | null;
  assetCategory?: string | null;
  assetLocation?: string | null;
  barcode?: string | null;
  baseAmount?: number | null;
  baseNetAmount?: number | null;
  baseNetRate?: number | null;
  basePriceListRate?: number | null;
  baseRate?: number | null;
  baseRateWithMargin?: number | null;
  batchNo?: string | null;
  billedAmt?: number | null;
  bom?: string | null;
  brand?: string | null;
  conversionFactor?: number | null;
  costCenter?: string | null;
  creation?: Date | null;
  deliveryNoteItem?: string | null;
  description?: string | null;
  discountAmount?: number | null;
  discountPercentage?: number | null;
  docstatus?: number | null;
  expenseAccount?: string | null;
  fromWarehouse?: string | null;
  hasItemScanned?: number | null;
  idx?: number | null;
  image?: string | null;
  includeExplodedItems?: number | null;
  isFixedAsset?: number | null;
  isFreeItem?: number | null;
  itemCode?: string | null;
  itemGroup?: string | null;
  itemName?: string | null;
  itemTaxAmount?: number | null;
  itemTaxRate?: string | null;
  itemTaxTemplate?: string | null;
  landedCostVoucherAmount?: number | null;
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
  project?: string | null;
  provisionalExpenseAccount?: string | null;
  purchaseInvoice?: string | null;
  purchaseInvoiceItem?: string | null;
  purchaseOrder?: string | null;
  purchaseOrderItem?: string | null;
  purchaseReceiptItem?: string | null;
  putawayRule?: string | null;
  qty?: number | null;
  qualityInspection?: string | null;
  rate?: number | null;
  rateDifferenceWithPurchaseInvoice?: number | null;
  rateWithMargin?: number | null;
  receivedQty?: number | null;
  receivedStockQty?: number | null;
  rejectedQty?: number | null;
  rejectedSerialAndBatchBundle?: string | null;
  rejectedSerialNo?: string | null;
  rejectedWarehouse?: string | null;
  retainSample?: number | null;
  returnQtyFromRejectedWarehouse?: number | null;
  returnedQty?: number | null;
  rmSuppCost?: number | null;
  salesIncomingRate?: number | null;
  salesOrder?: string | null;
  salesOrderItem?: string | null;
  sampleQuantity?: number | null;
  scheduleDate?: Date | null;
  serialAndBatchBundle?: string | null;
  serialNo?: string | null;
  stockQty?: number | null;
  stockUom?: string | null;
  stockUomRate?: number | null;
  subcontractingReceiptItem?: string | null;
  supplierPartNo?: string | null;
  totalWeight?: number | null;
  uom?: string | null;
  useSerialBatchFields?: number | null;
  valuationRate?: number | null;
  warehouse?: string | null;
  weightPerUnit?: number | null;
  weightUom?: string | null;
  wipCompositeAsset?: string | null;
};