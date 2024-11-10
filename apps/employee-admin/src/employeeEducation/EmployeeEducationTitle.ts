import { EmployeeEducation as TEmployeeEducation } from "../api/employeeEducation/EmployeeEducation";

export const EMPLOYEEEDUCATION_TITLE_FIELD = "name";

export const EmployeeEducationTitle = (record: TEmployeeEducation): string => {
  return record.name?.toString() || String(record.id);
};
