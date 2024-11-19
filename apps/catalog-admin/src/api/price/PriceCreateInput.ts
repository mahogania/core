import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type PriceCreateInput = {
  currency?: CurrencyWhereUniqueInput | null;
  options?: OptionWhereUniqueInput | null;
  priceRuleUrl?: string | null;
};
