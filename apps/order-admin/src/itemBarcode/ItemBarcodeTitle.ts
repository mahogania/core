import { ItemBarcode as TItemBarcode } from "../api/itemBarcode/ItemBarcode";

export const ITEMBARCODE_TITLE_FIELD = "name";

export const ItemBarcodeTitle = (record: TItemBarcode): string => {
  return record.name?.toString() || String(record.id);
};
