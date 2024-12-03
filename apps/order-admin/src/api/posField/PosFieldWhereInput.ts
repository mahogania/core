import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PosFieldWhereInput = {
  creation?: DateTimeNullableFilter;
  defaultValue?: StringNullableFilter;
  docStatus?: IntNullableFilter;
  fieldname?: StringNullableFilter;
  fieldtype?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  label?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  options?: StringNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
  readOnly?: IntNullableFilter;
  reqd?: IntNullableFilter;
};
