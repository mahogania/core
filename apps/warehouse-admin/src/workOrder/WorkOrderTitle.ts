import { WorkOrder as TWorkOrder } from "../api/workOrder/WorkOrder";

export const WORKORDER_TITLE_FIELD = "id";

export const WorkOrderTitle = (record: TWorkOrder): string => {
  return record.id?.toString() || String(record.id);
};
