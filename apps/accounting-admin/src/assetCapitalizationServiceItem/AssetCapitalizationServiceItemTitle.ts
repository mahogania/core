import { AssetCapitalizationServiceItem as TAssetCapitalizationServiceItem } from "../api/assetCapitalizationServiceItem/AssetCapitalizationServiceItem";

export const ASSETCAPITALIZATIONSERVICEITEM_TITLE_FIELD = "itemName";

export const AssetCapitalizationServiceItemTitle = (
  record: TAssetCapitalizationServiceItem
): string => {
  return record.itemName?.toString() || String(record.id);
};
