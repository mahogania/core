import { InventoryDimension as TInventoryDimension } from "../api/inventoryDimension/InventoryDimension";

export const INVENTORYDIMENSION_TITLE_FIELD = "dimensionName";

export const InventoryDimensionTitle = (
  record: TInventoryDimension
): string => {
  return record.dimensionName?.toString() || String(record.id);
};
