import { SubcontractingOrder as TSubcontractingOrder } from "../api/subcontractingOrder/SubcontractingOrder";

export const SUBCONTRACTINGORDER_TITLE_FIELD = "id";

export const SubcontractingOrderTitle = (
  record: TSubcontractingOrder
): string => {
  return record.id?.toString() || String(record.id);
};
