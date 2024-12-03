import { EmployeeGroup as TEmployeeGroup } from "../api/employeeGroup/EmployeeGroup";

export const EMPLOYEEGROUP_TITLE_FIELD = "employeeGroupName";

export const EmployeeGroupTitle = (record: TEmployeeGroup): string => {
  return record.employeeGroupName?.toString() || String(record.id);
};
