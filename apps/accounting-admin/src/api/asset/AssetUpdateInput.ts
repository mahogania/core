export type AssetUpdateInput = {
  additionalAssetCost?: number | null;
  amendedFrom?: string | null;
  assetCategory?: string | null;
  assetName?: string | null;
  assetOwner?: string | null;
  assetOwnerCompany?: string | null;
  assetQuantity?: number | null;
  availableForUseDate?: Date | null;
  bookedFixedAsset?: number | null;
  calculateDepreciation?: number | null;
  company?: string | null;
  comprehensiveInsurance?: string | null;
  costCenter?: string | null;
  creation?: Date | null;
  custodian?: string | null;
  customer?: string | null;
  defaultFinanceBook?: string | null;
  department?: string | null;
  deprEntryPostingStatus?: string | null;
  depreciationMethod?: string | null;
  disposalDate?: Date | null;
  docstatus?: number | null;
  frequencyOfDepreciation?: number | null;
  grossPurchaseAmount?: number | null;
  idx?: number | null;
  image?: string | null;
  insuranceEndDate?: Date | null;
  insuranceStartDate?: Date | null;
  insuredValue?: string | null;
  insurer?: string | null;
  isCompositeAsset?: number | null;
  isExistingAsset?: number | null;
  isFullyDepreciated?: number | null;
  itemCode?: string | null;
  itemName?: string | null;
  journalEntryForScrap?: string | null;
  location?: string | null;
  maintenanceRequired?: number | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  namingSeries?: string | null;
  nextDepreciationDate?: Date | null;
  openingAccumulatedDepreciation?: number | null;
  openingNumberOfBookedDepreciations?: number | null;
  owner?: string | null;
  policyNumber?: string | null;
  purchaseAmount?: number | null;
  purchaseDate?: Date | null;
  purchaseInvoice?: string | null;
  purchaseInvoiceItem?: string | null;
  purchaseReceipt?: string | null;
  purchaseReceiptItem?: string | null;
  splitFrom?: string | null;
  status?: string | null;
  supplier?: string | null;
  totalAssetCost?: number | null;
  totalNumberOfDepreciations?: number | null;
  valueAfterDepreciation?: number | null;
};