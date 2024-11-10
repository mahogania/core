import { Catalog as TCatalog } from "../api/catalog/Catalog";

export const CATALOG_TITLE_FIELD = "displayName";

export const CatalogTitle = (record: TCatalog): string => {
  return record.displayName?.toString() || String(record.id);
};
