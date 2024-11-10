import { AssetMaintenanceTask as TAssetMaintenanceTask } from "../api/assetMaintenanceTask/AssetMaintenanceTask";

export const ASSETMAINTENANCETASK_TITLE_FIELD = "assignToName";

export const AssetMaintenanceTaskTitle = (
  record: TAssetMaintenanceTask
): string => {
  return record.assignToName?.toString() || String(record.id);
};
