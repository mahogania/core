import { DiscountCreateNestedManyWithoutCurrenciesInput } from "./DiscountCreateNestedManyWithoutCurrenciesInput";
import { PriceCreateNestedManyWithoutCurrenciesInput } from "./PriceCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  discounts?: DiscountCreateNestedManyWithoutCurrenciesInput;
  precision?: number | null;
  prices?: PriceCreateNestedManyWithoutCurrenciesInput;
  symbolField?: string | null;
};
