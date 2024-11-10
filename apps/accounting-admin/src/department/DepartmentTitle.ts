import { Department as TDepartment } from "../api/department/Department";

export const DEPARTMENT_TITLE_FIELD = "departmentName";

export const DepartmentTitle = (record: TDepartment): string => {
  return record.departmentName?.toString() || String(record.id);
};
