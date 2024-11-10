import { AssetRepair as TAssetRepair } from "../api/assetRepair/AssetRepair";

export const ASSETREPAIR_TITLE_FIELD = "assetName";

export const AssetRepairTitle = (record: TAssetRepair): string => {
  return record.assetName?.toString() || String(record.id);
};
