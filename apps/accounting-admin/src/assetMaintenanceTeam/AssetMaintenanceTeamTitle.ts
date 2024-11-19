import { AssetMaintenanceTeam as TAssetMaintenanceTeam } from "../api/assetMaintenanceTeam/AssetMaintenanceTeam";

export const ASSETMAINTENANCETEAM_TITLE_FIELD = "maintenanceManagerName";

export const AssetMaintenanceTeamTitle = (
  record: TAssetMaintenanceTeam
): string => {
  return record.maintenanceManagerName?.toString() || String(record.id);
};
