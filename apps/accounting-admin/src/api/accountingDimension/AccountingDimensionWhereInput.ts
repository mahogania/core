import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AccountingDimensionWhereInput = {
  creation?: DateTimeNullableFilter;
  disabled?: IntNullableFilter;
  docstatus?: IntNullableFilter;
  documentType?: StringNullableFilter;
  fieldname?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  label?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
};
