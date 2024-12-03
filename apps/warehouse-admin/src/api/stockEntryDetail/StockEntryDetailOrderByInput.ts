import { SortOrder } from "../../util/SortOrder";

export type StockEntryDetailOrderByInput = {
  actualQty?: SortOrder;
  additionalCost?: SortOrder;
  againstStockEntry?: SortOrder;
  allowAlternativeItem?: SortOrder;
  allowZeroValuationRate?: SortOrder;
  amount?: SortOrder;
  barcode?: SortOrder;
  basicAmount?: SortOrder;
  basicRate?: SortOrder;
  batchNo?: SortOrder;
  bomNo?: SortOrder;
  conversionFactor?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  expenseAccount?: SortOrder;
  hasItemScanned?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  image?: SortOrder;
  isFinishedItem?: SortOrder;
  isScrapItem?: SortOrder;
  itemCode?: SortOrder;
  itemGroup?: SortOrder;
  itemName?: SortOrder;
  jobCardItem?: SortOrder;
  materialRequest?: SortOrder;
  materialRequestItem?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  originalItem?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  poDetail?: SortOrder;
  project?: SortOrder;
  putawayRule?: SortOrder;
  qty?: SortOrder;
  qualityInspection?: SortOrder;
  referencePurchaseReceipt?: SortOrder;
  retainSample?: SortOrder;
  sWarehouse?: SortOrder;
  sampleQuantity?: SortOrder;
  scoRmDetail?: SortOrder;
  serialAndBatchBundle?: SortOrder;
  serialNo?: SortOrder;
  setBasicRateManually?: SortOrder;
  steDetail?: SortOrder;
  stockUom?: SortOrder;
  subcontractedItem?: SortOrder;
  tWarehouse?: SortOrder;
  transferQty?: SortOrder;
  transferredQty?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
  useSerialBatchFields?: SortOrder;
  valuationRate?: SortOrder;
};
