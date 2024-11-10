import { BomScrapItem as TBomScrapItem } from "../api/bomScrapItem/BomScrapItem";

export const BOMSCRAPITEM_TITLE_FIELD = "itemName";

export const BomScrapItemTitle = (record: TBomScrapItem): string => {
  return record.itemName?.toString() || String(record.id);
};
