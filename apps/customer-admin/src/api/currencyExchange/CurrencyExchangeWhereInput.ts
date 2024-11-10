import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CurrencyExchangeWhereInput = {
  creation?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  exchangeRate?: FloatNullableFilter;
  forBuying?: BooleanNullableFilter;
  forSelling?: BooleanNullableFilter;
  fromCurrency?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  toCurrency?: StringNullableFilter;
};
