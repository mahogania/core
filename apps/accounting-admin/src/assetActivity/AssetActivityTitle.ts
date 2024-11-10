import { AssetActivity as TAssetActivity } from "../api/assetActivity/AssetActivity";

export const ASSETACTIVITY_TITLE_FIELD = "name";

export const AssetActivityTitle = (record: TAssetActivity): string => {
  return record.name?.toString() || String(record.id);
};
