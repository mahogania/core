import { SortOrder } from "../../util/SortOrder";

export type PurchaseReceiptItemOrderByInput = {
  allowZeroValuationRate?: SortOrder;
  amount?: SortOrder;
  applyTds?: SortOrder;
  assetCategory?: SortOrder;
  assetLocation?: SortOrder;
  barcode?: SortOrder;
  baseAmount?: SortOrder;
  baseNetAmount?: SortOrder;
  baseNetRate?: SortOrder;
  basePriceListRate?: SortOrder;
  baseRate?: SortOrder;
  baseRateWithMargin?: SortOrder;
  batchNo?: SortOrder;
  billedAmt?: SortOrder;
  bom?: SortOrder;
  brand?: SortOrder;
  conversionFactor?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  deliveryNoteItem?: SortOrder;
  description?: SortOrder;
  discountAmount?: SortOrder;
  discountPercentage?: SortOrder;
  docstatus?: SortOrder;
  expenseAccount?: SortOrder;
  fromWarehouse?: SortOrder;
  hasItemScanned?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  image?: SortOrder;
  includeExplodedItems?: SortOrder;
  isFixedAsset?: SortOrder;
  isFreeItem?: SortOrder;
  itemCode?: SortOrder;
  itemGroup?: SortOrder;
  itemName?: SortOrder;
  itemTaxAmount?: SortOrder;
  itemTaxRate?: SortOrder;
  itemTaxTemplate?: SortOrder;
  landedCostVoucherAmount?: SortOrder;
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
  project?: SortOrder;
  provisionalExpenseAccount?: SortOrder;
  purchaseInvoice?: SortOrder;
  purchaseInvoiceItem?: SortOrder;
  purchaseOrder?: SortOrder;
  purchaseOrderItem?: SortOrder;
  purchaseReceiptItem?: SortOrder;
  putawayRule?: SortOrder;
  qty?: SortOrder;
  qualityInspection?: SortOrder;
  rate?: SortOrder;
  rateDifferenceWithPurchaseInvoice?: SortOrder;
  rateWithMargin?: SortOrder;
  receivedQty?: SortOrder;
  receivedStockQty?: SortOrder;
  rejectedQty?: SortOrder;
  rejectedSerialAndBatchBundle?: SortOrder;
  rejectedSerialNo?: SortOrder;
  rejectedWarehouse?: SortOrder;
  retainSample?: SortOrder;
  returnQtyFromRejectedWarehouse?: SortOrder;
  returnedQty?: SortOrder;
  rmSuppCost?: SortOrder;
  salesIncomingRate?: SortOrder;
  salesOrder?: SortOrder;
  salesOrderItem?: SortOrder;
  sampleQuantity?: SortOrder;
  scheduleDate?: SortOrder;
  serialAndBatchBundle?: SortOrder;
  serialNo?: SortOrder;
  stockQty?: SortOrder;
  stockUom?: SortOrder;
  stockUomRate?: SortOrder;
  subcontractingReceiptItem?: SortOrder;
  supplierPartNo?: SortOrder;
  totalWeight?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
  useSerialBatchFields?: SortOrder;
  valuationRate?: SortOrder;
  warehouse?: SortOrder;
  weightPerUnit?: SortOrder;
  weightUom?: SortOrder;
  wipCompositeAsset?: SortOrder;
};