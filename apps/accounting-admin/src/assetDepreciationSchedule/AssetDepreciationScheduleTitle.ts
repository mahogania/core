import { AssetDepreciationSchedule as TAssetDepreciationSchedule } from "../api/assetDepreciationSchedule/AssetDepreciationSchedule";

export const ASSETDEPRECIATIONSCHEDULE_TITLE_FIELD = "name";

export const AssetDepreciationScheduleTitle = (
  record: TAssetDepreciationSchedule
): string => {
  return record.name?.toString() || String(record.id);
};
