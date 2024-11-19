import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type PriceUpdateInput = {
  currency?: CurrencyWhereUniqueInput | null;
  options?: OptionWhereUniqueInput | null;
  priceRuleUrl?: string | null;
};
