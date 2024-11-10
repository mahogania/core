import { LandedCostPurchaseReceipt as TLandedCostPurchaseReceipt } from "../api/landedCostPurchaseReceipt/LandedCostPurchaseReceipt";

export const LANDEDCOSTPURCHASERECEIPT_TITLE_FIELD = "name";

export const LandedCostPurchaseReceiptTitle = (
  record: TLandedCostPurchaseReceipt
): string => {
  return record.name?.toString() || String(record.id);
};
