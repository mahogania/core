import { BomCreatorItem as TBomCreatorItem } from "../api/bomCreatorItem/BomCreatorItem";

export const BOMCREATORITEM_TITLE_FIELD = "itemName";

export const BomCreatorItemTitle = (record: TBomCreatorItem): string => {
  return record.itemName?.toString() || String(record.id);
};
