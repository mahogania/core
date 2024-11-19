import { AssetRepairConsumedItem as TAssetRepairConsumedItem } from "../api/assetRepairConsumedItem/AssetRepairConsumedItem";

export const ASSETREPAIRCONSUMEDITEM_TITLE_FIELD = "name";

export const AssetRepairConsumedItemTitle = (
  record: TAssetRepairConsumedItem
): string => {
  return record.name?.toString() || String(record.id);
};
