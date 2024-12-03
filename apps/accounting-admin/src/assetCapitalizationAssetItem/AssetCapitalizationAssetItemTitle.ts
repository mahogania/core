import { AssetCapitalizationAssetItem as TAssetCapitalizationAssetItem } from "../api/assetCapitalizationAssetItem/AssetCapitalizationAssetItem";

export const ASSETCAPITALIZATIONASSETITEM_TITLE_FIELD = "assetName";

export const AssetCapitalizationAssetItemTitle = (
  record: TAssetCapitalizationAssetItem
): string => {
  return record.assetName?.toString() || String(record.id);
};
