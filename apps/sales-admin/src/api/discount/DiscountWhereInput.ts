import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";

export type DiscountWhereInput = {
  currency?: CurrencyWhereUniqueInput;
  discountRuleUrl?: StringNullableFilter;
  id?: StringFilter;
  options?: OptionListRelationFilter;
};
