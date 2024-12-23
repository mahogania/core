import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  additionalAssetCost?: SortOrder;
  amendedFrom?: SortOrder;
  assetCategory?: SortOrder;
  assetName?: SortOrder;
  assetOwner?: SortOrder;
  assetOwnerCompany?: SortOrder;
  assetQuantity?: SortOrder;
  availableForUseDate?: SortOrder;
  bookedFixedAsset?: SortOrder;
  calculateDepreciation?: SortOrder;
  company?: SortOrder;
  comprehensiveInsurance?: SortOrder;
  costCenter?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  custodian?: SortOrder;
  customer?: SortOrder;
  defaultFinanceBook?: SortOrder;
  department?: SortOrder;
  deprEntryPostingStatus?: SortOrder;
  depreciationMethod?: SortOrder;
  disposalDate?: SortOrder;
  docstatus?: SortOrder;
  frequencyOfDepreciation?: SortOrder;
  grossPurchaseAmount?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  image?: SortOrder;
  insuranceEndDate?: SortOrder;
  insuranceStartDate?: SortOrder;
  insuredValue?: SortOrder;
  insurer?: SortOrder;
  isCompositeAsset?: SortOrder;
  isExistingAsset?: SortOrder;
  isFullyDepreciated?: SortOrder;
  itemCode?: SortOrder;
  itemName?: SortOrder;
  journalEntryForScrap?: SortOrder;
  location?: SortOrder;
  maintenanceRequired?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  namingSeries?: SortOrder;
  nextDepreciationDate?: SortOrder;
  openingAccumulatedDepreciation?: SortOrder;
  openingNumberOfBookedDepreciations?: SortOrder;
  owner?: SortOrder;
  policyNumber?: SortOrder;
  purchaseAmount?: SortOrder;
  purchaseDate?: SortOrder;
  purchaseInvoice?: SortOrder;
  purchaseInvoiceItem?: SortOrder;
  purchaseReceipt?: SortOrder;
  purchaseReceiptItem?: SortOrder;
  splitFrom?: SortOrder;
  status?: SortOrder;
  supplier?: SortOrder;
  totalAssetCost?: SortOrder;
  totalNumberOfDepreciations?: SortOrder;
  updatedAt?: SortOrder;
  valueAfterDepreciation?: SortOrder;
};
