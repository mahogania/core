import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ModeOfPaymentWhereInput = {
  creation?: DateTimeNullableFilter;
  docStatus?: IntNullableFilter;
  enabled?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modeOfPayment?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
