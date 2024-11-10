import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DepartmentWhereInput = {
  company?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  departmentName?: StringNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isGroup?: IntNullableFilter;
  lft?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parentDepartment?: StringNullableFilter;
  rgt?: IntNullableFilter;
};
