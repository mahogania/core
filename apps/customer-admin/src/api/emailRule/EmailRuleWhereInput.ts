import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type EmailRuleWhereInput = {
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  emailId?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  isSpam?: BooleanNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
};
