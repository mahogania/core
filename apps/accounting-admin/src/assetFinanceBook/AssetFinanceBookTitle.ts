import { AssetFinanceBook as TAssetFinanceBook } from "../api/assetFinanceBook/AssetFinanceBook";

export const ASSETFINANCEBOOK_TITLE_FIELD = "name";

export const AssetFinanceBookTitle = (record: TAssetFinanceBook): string => {
  return record.name?.toString() || String(record.id);
};
