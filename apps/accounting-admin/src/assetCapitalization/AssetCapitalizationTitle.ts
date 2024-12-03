import { AssetCapitalization as TAssetCapitalization } from "../api/assetCapitalization/AssetCapitalization";

export const ASSETCAPITALIZATION_TITLE_FIELD = "name";

export const AssetCapitalizationTitle = (
  record: TAssetCapitalization
): string => {
  return record.name?.toString() || String(record.id);
};
