import { WarehouseType as TWarehouseType } from "../api/warehouseType/WarehouseType";

export const WAREHOUSETYPE_TITLE_FIELD = "id";

export const WarehouseTypeTitle = (record: TWarehouseType): string => {
  return record.id?.toString() || String(record.id);
};
