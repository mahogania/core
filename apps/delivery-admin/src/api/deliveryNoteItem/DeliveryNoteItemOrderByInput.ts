import { SortOrder } from "../../util/SortOrder";

export type DeliveryNoteItemOrderByInput = {
  actualBatchQty?: SortOrder;
  actualQty?: SortOrder;
  againstSalesInvoice?: SortOrder;
  againstSalesOrder?: SortOrder;
  allowZeroValuationRate?: SortOrder;
  amount?: SortOrder;
  barcode?: SortOrder;
  baseAmount?: SortOrder;
  baseNetAmount?: SortOrder;
  baseNetRate?: SortOrder;
  basePriceListRate?: SortOrder;
  baseRate?: SortOrder;
  baseRateWithMargin?: SortOrder;
  batchNo?: SortOrder;
  billedAmt?: SortOrder;
  brand?: SortOrder;
  conversionFactor?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  customerItemCode?: SortOrder;
  description?: SortOrder;
  discountAmount?: SortOrder;
  discountPercentage?: SortOrder;
  dnDetail?: SortOrder;
  docstatus?: SortOrder;
  expenseAccount?: SortOrder;
  grantCommission?: SortOrder;
  hasItemScanned?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  image?: SortOrder;
  incomingRate?: SortOrder;
  installedQty?: SortOrder;
  isFreeItem?: SortOrder;
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
  owner?: SortOrder;
  packedQty?: SortOrder;
  pageBreak?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  pickListItem?: SortOrder;
  priceListRate?: SortOrder;
  pricingRules?: SortOrder;
  project?: SortOrder;
  purchaseOrder?: SortOrder;
  purchaseOrderItem?: SortOrder;
  qty?: SortOrder;
  qualityInspection?: SortOrder;
  rate?: SortOrder;
  rateWithMargin?: SortOrder;
  receivedQty?: SortOrder;
  returnedQty?: SortOrder;
  serialAndBatchBundle?: SortOrder;
  serialNo?: SortOrder;
  siDetail?: SortOrder;
  soDetail?: SortOrder;
  stockQty?: SortOrder;
  stockUom?: SortOrder;
  stockUomRate?: SortOrder;
  targetWarehouse?: SortOrder;
  totalWeight?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
  useSerialBatchFields?: SortOrder;
  warehouse?: SortOrder;
  weightPerUnit?: SortOrder;
  weightUom?: SortOrder;
};
