import { AssetMovementItem as TAssetMovementItem } from "../api/assetMovementItem/AssetMovementItem";

export const ASSETMOVEMENTITEM_TITLE_FIELD = "assetName";

export const AssetMovementItemTitle = (record: TAssetMovementItem): string => {
  return record.assetName?.toString() || String(record.id);
};
