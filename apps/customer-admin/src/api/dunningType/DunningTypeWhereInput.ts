import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DunningTypeWhereInput = {
  company?: StringNullableFilter;
  costCenter?: StringNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  dunningFee?: FloatNullableFilter;
  dunningType?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  incomeAccount?: StringNullableFilter;
  isDefault?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  rateOfInterest?: FloatNullableFilter;
};
