import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocTypeLinkWhereInput = {
  creation?: DateTimeNullableFilter;
  custom?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  group?: StringNullableFilter;
  hidden?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isChildTable?: IntNullableFilter;
  linkDoctype?: StringNullableFilter;
  linkFieldname?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentDoctype?: StringNullableFilter;
  parentfield?: StringNullableFilter;
  parenttype?: StringNullableFilter;
  tableFieldname?: StringNullableFilter;
};
