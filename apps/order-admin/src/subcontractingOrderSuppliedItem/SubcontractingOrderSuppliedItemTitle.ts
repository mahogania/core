import { SubcontractingOrderSuppliedItem as TSubcontractingOrderSuppliedItem } from "../api/subcontractingOrderSuppliedItem/SubcontractingOrderSuppliedItem";

export const SUBCONTRACTINGORDERSUPPLIEDITEM_TITLE_FIELD = "id";

export const SubcontractingOrderSuppliedItemTitle = (
  record: TSubcontractingOrderSuppliedItem
): string => {
  return record.id?.toString() || String(record.id);
};
