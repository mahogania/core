import { AssetMaintenanceLog as TAssetMaintenanceLog } from "../api/assetMaintenanceLog/AssetMaintenanceLog";

export const ASSETMAINTENANCELOG_TITLE_FIELD = "assetName";

export const AssetMaintenanceLogTitle = (
  record: TAssetMaintenanceLog
): string => {
  return record.assetName?.toString() || String(record.id);
};
