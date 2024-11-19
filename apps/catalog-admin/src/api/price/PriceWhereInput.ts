import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PriceWhereInput = {
  currency?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  options?: OptionWhereUniqueInput;
  priceRuleUrl?: StringNullableFilter;
};
