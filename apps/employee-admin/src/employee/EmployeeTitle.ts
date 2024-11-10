import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "bankName";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.bankName?.toString() || String(record.id);
};
