import { ItemManufacturer as TItemManufacturer } from "../api/itemManufacturer/ItemManufacturer";

export const ITEMMANUFACTURER_TITLE_FIELD = "itemName";

export const ItemManufacturerTitle = (record: TItemManufacturer): string => {
  return record.itemName?.toString() || String(record.id);
};
