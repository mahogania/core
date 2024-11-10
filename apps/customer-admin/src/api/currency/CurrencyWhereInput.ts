import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type CurrencyWhereInput = {
  creation?: DateTimeNullableFilter;
  currencyName?: StringNullableFilter;
  docstatus?: IntNullableFilter;
  enabled?: BooleanNullableFilter;
  fraction?: StringNullableFilter;
  fractionUnits?: IntNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  numberFormat?: StringNullableFilter;
  owner?: StringNullableFilter;
  smallestCurrencyFractionValue?: FloatNullableFilter;
  symbolField?: StringNullableFilter;
  symbolOnRight?: BooleanNullableFilter;
};
