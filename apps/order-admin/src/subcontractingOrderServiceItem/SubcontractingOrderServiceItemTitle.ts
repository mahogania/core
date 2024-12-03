import { SubcontractingOrderServiceItem as TSubcontractingOrderServiceItem } from "../api/subcontractingOrderServiceItem/SubcontractingOrderServiceItem";

export const SUBCONTRACTINGORDERSERVICEITEM_TITLE_FIELD = "id";

export const SubcontractingOrderServiceItemTitle = (
  record: TSubcontractingOrderServiceItem
): string => {
  return record.id?.toString() || String(record.id);
};
