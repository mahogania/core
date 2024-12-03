import { WorkOrderOperation as TWorkOrderOperation } from "../api/workOrderOperation/WorkOrderOperation";

export const WORKORDEROPERATION_TITLE_FIELD = "id";

export const WorkOrderOperationTitle = (
  record: TWorkOrderOperation
): string => {
  return record.id?.toString() || String(record.id);
};
