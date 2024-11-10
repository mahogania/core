import { BomItem as TBomItem } from "../api/bomItem/BomItem";

export const BOMITEM_TITLE_FIELD = "itemName";

export const BomItemTitle = (record: TBomItem): string => {
  return record.itemName?.toString() || String(record.id);
};
