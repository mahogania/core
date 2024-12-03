export type SalesInvoiceItem = {
  actualBatchQty: number | null;
  actualQty: number | null;
  allowZeroValuationRate: number | null;
  amount: number | null;
  asset: string | null;
  barcode: string | null;
  baseAmount: number | null;
  baseNetAmount: number | null;
  baseNetRate: number | null;
  basePriceListRate: number | null;
  baseRate: number | null;
  baseRateWithMargin: number | null;
  batchNo: string | null;
  brand: string | null;
  conversionFactor: number | null;
  costCenter: string | null;
  createdAt: Date;
  creation: Date | null;
  customerItemCode: string | null;
  deferredRevenueAccount: string | null;
  deliveredBySupplier: number | null;
  deliveredQty: number | null;
  deliveryNote: string | null;
  description: string | null;
  discountAccount: string | null;
  discountAmount: number | null;
  discountPercentage: number | null;
  dnDetail: string | null;
  docstatus: number | null;
  enableDeferredRevenue: number | null;
  expenseAccount: string | null;
  financeBook: string | null;
  grantCommission: number | null;
  hasItemScanned: number | null;
  id: string;
  idx: number | null;
  image: string | null;
  incomeAccount: string | null;
  incomingRate: number | null;
  isFixedAsset: number | null;
  isFreeItem: number | null;
  itemCode: string | null;
  itemGroup: string | null;
  itemName: string | null;
  itemTaxRate: string | null;
  itemTaxTemplate: string | null;
  marginRateOrAmount: number | null;
  marginType: string | null;
  modified: Date | null;
  modifiedBy: string | null;
  name: string | null;
  netAmount: number | null;
  netRate: number | null;
  owner: string | null;
  pageBreak: number | null;
  parent: string | null;
  parentField: string | null;
  parentType: string | null;
  priceListRate: number | null;
  pricingRules: string | null;
  project: string | null;
  purchaseOrder: string | null;
  purchaseOrderItem: string | null;
  qty: number | null;
  qualityInspection: string | null;
  rate: number | null;
  rateWithMargin: number | null;
  salesInvoiceItem: string | null;
  salesOrder: string | null;
  serialAndBatchBundle: string | null;
  serialNo: string | null;
  serviceEndDate: Date | null;
  serviceStartDate: Date | null;
  serviceStopDate: Date | null;
  soDetail: string | null;
  stockQty: number | null;
  stockUom: string | null;
  stockUomRate: number | null;
  targetWarehouse: string | null;
  totalWeight: number | null;
  uom: string | null;
  updatedAt: Date;
  useSerialBatchFields: number | null;
  warehouse: string | null;
  weightPerUnit: number | null;
  weightUom: string | null;
};
