import { Warehouse as TWarehouse } from "../api/warehouse/Warehouse";

export const WAREHOUSE_TITLE_FIELD = "id";

export const WarehouseTitle = (record: TWarehouse): string => {
  return record.id?.toString() || String(record.id);
};
