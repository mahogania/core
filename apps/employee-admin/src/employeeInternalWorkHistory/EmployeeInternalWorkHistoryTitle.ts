import { EmployeeInternalWorkHistory as TEmployeeInternalWorkHistory } from "../api/employeeInternalWorkHistory/EmployeeInternalWorkHistory";

export const EMPLOYEEINTERNALWORKHISTORY_TITLE_FIELD = "name";

export const EmployeeInternalWorkHistoryTitle = (
  record: TEmployeeInternalWorkHistory
): string => {
  return record.name?.toString() || String(record.id);
};
