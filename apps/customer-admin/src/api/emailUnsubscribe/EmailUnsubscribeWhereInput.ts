import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailUnsubscribeWhereInput = {
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  email?: StringNullableFilter;
  globalUnsubscribe?: BooleanNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  referenceDoctype?: StringNullableFilter;
  referenceName?: StringNullableFilter;
};
