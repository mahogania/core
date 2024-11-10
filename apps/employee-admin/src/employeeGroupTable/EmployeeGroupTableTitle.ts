import { EmployeeGroupTable as TEmployeeGroupTable } from "../api/employeeGroupTable/EmployeeGroupTable";

export const EMPLOYEEGROUPTABLE_TITLE_FIELD = "employeeName";

export const EmployeeGroupTableTitle = (
  record: TEmployeeGroupTable
): string => {
  return record.employeeName?.toString() || String(record.id);
};
