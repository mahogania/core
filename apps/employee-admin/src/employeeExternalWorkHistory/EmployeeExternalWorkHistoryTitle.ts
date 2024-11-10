import { EmployeeExternalWorkHistory as TEmployeeExternalWorkHistory } from "../api/employeeExternalWorkHistory/EmployeeExternalWorkHistory";

export const EMPLOYEEEXTERNALWORKHISTORY_TITLE_FIELD = "companyName";

export const EmployeeExternalWorkHistoryTitle = (
  record: TEmployeeExternalWorkHistory
): string => {
  return record.companyName?.toString() || String(record.id);
};
