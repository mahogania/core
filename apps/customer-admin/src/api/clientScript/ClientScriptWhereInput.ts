import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClientScriptWhereInput = {
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  dt?: StringNullableFilter;
  enabled?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  moduleField?: StringNullableFilter;
  owner?: StringNullableFilter;
  script?: StringNullableFilter;
  view?: StringNullableFilter;
};
