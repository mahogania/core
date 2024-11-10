import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocTypeActionWhereInput = {
  action?: StringNullableFilter;
  actionType?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  custom?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  group?: StringNullableFilter;
  hidden?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  label?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
};
