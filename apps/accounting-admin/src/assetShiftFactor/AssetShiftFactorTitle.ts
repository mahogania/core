import { AssetShiftFactor as TAssetShiftFactor } from "../api/assetShiftFactor/AssetShiftFactor";

export const ASSETSHIFTFACTOR_TITLE_FIELD = "name";

export const AssetShiftFactorTitle = (record: TAssetShiftFactor): string => {
  return record.name?.toString() || String(record.id);
};
