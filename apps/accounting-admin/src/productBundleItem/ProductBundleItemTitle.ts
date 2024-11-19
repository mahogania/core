import { ProductBundleItem as TProductBundleItem } from "../api/productBundleItem/ProductBundleItem";

export const PRODUCTBUNDLEITEM_TITLE_FIELD = "name";

export const ProductBundleItemTitle = (record: TProductBundleItem): string => {
  return record.name?.toString() || String(record.id);
};
