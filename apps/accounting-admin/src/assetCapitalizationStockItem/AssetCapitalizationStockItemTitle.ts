import { AssetCapitalizationStockItem as TAssetCapitalizationStockItem } from "../api/assetCapitalizationStockItem/AssetCapitalizationStockItem";

export const ASSETCAPITALIZATIONSTOCKITEM_TITLE_FIELD = "id";

export const AssetCapitalizationStockItemTitle = (
  record: TAssetCapitalizationStockItem
): string => {
  return record.id?.toString() || String(record.id);
};
