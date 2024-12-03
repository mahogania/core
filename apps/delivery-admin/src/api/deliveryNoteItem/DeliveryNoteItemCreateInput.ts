export type DeliveryNoteItemCreateInput = {
  actualBatchQty?: number | null;
  actualQty?: number | null;
  againstSalesInvoice?: string | null;
  againstSalesOrder?: string | null;
  allowZeroValuationRate?: boolean | null;
  amount?: number | null;
  barcode?: string | null;
  baseAmount?: number | null;
  baseNetAmount?: number | null;
  baseNetRate?: number | null;
  basePriceListRate?: number | null;
  baseRate?: number | null;
  baseRateWithMargin?: number | null;
  batchNo?: string | null;
  billedAmt?: number | null;
  brand?: string | null;
  conversionFactor?: number | null;
  costCenter?: string | null;
  creation?: Date | null;
  customerItemCode?: string | null;
  description?: string | null;
  discountAmount?: number | null;
  discountPercentage?: number | null;
  dnDetail?: string | null;
  docstatus?: number | null;
  expenseAccount?: string | null;
  grantCommission?: boolean | null;
  hasItemScanned?: boolean | null;
  idx?: number | null;
  image?: string | null;
  incomingRate?: number | null;
  installedQty?: number | null;
  isFreeItem?: boolean | null;
  itemCode?: string | null;
  itemGroup?: string | null;
  itemName?: string | null;
  itemTaxRate?: string | null;
  itemTaxTemplate?: string | null;
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
  packedQty?: number | null;
  pageBreak?: boolean | null;
  parent?: string | null;
  parentfield?: string | null;
  parenttype?: string | null;
  pickListItem?: string | null;
  priceListRate?: number | null;
  pricingRules?: string | null;
  project?: string | null;
  purchaseOrder?: string | null;
  purchaseOrderItem?: string | null;
  qty?: number | null;
  qualityInspection?: string | null;
  rate?: number | null;
  rateWithMargin?: number | null;
  receivedQty?: number | null;
  returnedQty?: number | null;
  serialAndBatchBundle?: string | null;
  serialNo?: string | null;
  siDetail?: string | null;
  soDetail?: string | null;
  stockQty?: number | null;
  stockUom?: string | null;
  stockUomRate?: number | null;
  targetWarehouse?: string | null;
  totalWeight?: number | null;
  uom?: string | null;
  useSerialBatchFields?: boolean | null;
  warehouse?: string | null;
  weightPerUnit?: number | null;
  weightUom?: string | null;
};
