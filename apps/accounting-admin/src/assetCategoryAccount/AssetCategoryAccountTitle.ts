import { AssetCategoryAccount as TAssetCategoryAccount } from "../api/assetCategoryAccount/AssetCategoryAccount";

export const ASSETCATEGORYACCOUNT_TITLE_FIELD = "companyName";

export const AssetCategoryAccountTitle = (
  record: TAssetCategoryAccount
): string => {
  return record.companyName?.toString() || String(record.id);
};
