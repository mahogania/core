import { AssetCategory as TAssetCategory } from "../api/assetCategory/AssetCategory";

export const ASSETCATEGORY_TITLE_FIELD = "assetCategoryName";

export const AssetCategoryTitle = (record: TAssetCategory): string => {
  return record.assetCategoryName?.toString() || String(record.id);
};
