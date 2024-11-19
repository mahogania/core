import { PickListItem as TPickListItem } from "../api/pickListItem/PickListItem";

export const PICKLISTITEM_TITLE_FIELD = "itemName";

export const PickListItemTitle = (record: TPickListItem): string => {
  return record.itemName?.toString() || String(record.id);
};
