import { AssetValueAdjustment as TAssetValueAdjustment } from "../api/assetValueAdjustment/AssetValueAdjustment";

export const ASSETVALUEADJUSTMENT_TITLE_FIELD = "name";

export const AssetValueAdjustmentTitle = (
  record: TAssetValueAdjustment
): string => {
  return record.name?.toString() || String(record.id);
};
