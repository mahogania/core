import { AssetMaintenance as TAssetMaintenance } from "../api/assetMaintenance/AssetMaintenance";

export const ASSETMAINTENANCE_TITLE_FIELD = "assetName";

export const AssetMaintenanceTitle = (record: TAssetMaintenance): string => {
  return record.assetName?.toString() || String(record.id);
};
