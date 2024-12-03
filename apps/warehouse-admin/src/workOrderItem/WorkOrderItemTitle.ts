import { WorkOrderItem as TWorkOrderItem } from "../api/workOrderItem/WorkOrderItem";

export const WORKORDERITEM_TITLE_FIELD = "id";

export const WorkOrderItemTitle = (record: TWorkOrderItem): string => {
  return record.id?.toString() || String(record.id);
};
