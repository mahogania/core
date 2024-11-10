import { BomWebsiteItem as TBomWebsiteItem } from "../api/bomWebsiteItem/BomWebsiteItem";

export const BOMWEBSITEITEM_TITLE_FIELD = "itemName";

export const BomWebsiteItemTitle = (record: TBomWebsiteItem): string => {
  return record.itemName?.toString() || String(record.id);
};
