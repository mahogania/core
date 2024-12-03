import { SubcontractingOrderItem as TSubcontractingOrderItem } from "../api/subcontractingOrderItem/SubcontractingOrderItem";

export const SUBCONTRACTINGORDERITEM_TITLE_FIELD = "id";

export const SubcontractingOrderItemTitle = (
  record: TSubcontractingOrderItem
): string => {
  return record.id?.toString() || String(record.id);
};
