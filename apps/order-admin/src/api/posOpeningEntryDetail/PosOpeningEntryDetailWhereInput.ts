import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PosOpeningEntryDetailWhereInput = {
  creation?: DateTimeNullableFilter;
  docStatus?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modeOfPayment?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  openingAmount?: FloatNullableFilter;
  owner?: StringNullableFilter;
  parent?: StringNullableFilter;
  parentField?: StringNullableFilter;
  parentType?: StringNullableFilter;
};
