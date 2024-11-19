import { PickList as TPickList } from "../api/pickList/PickList";

export const PICKLIST_TITLE_FIELD = "customerName";

export const PickListTitle = (record: TPickList): string => {
  return record.customerName?.toString() || String(record.id);
};
