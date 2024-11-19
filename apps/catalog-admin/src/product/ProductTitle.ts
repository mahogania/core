import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "version";

export const ProductTitle = (record: TProduct): string => {
  return record.version?.toString() || String(record.id);
};
