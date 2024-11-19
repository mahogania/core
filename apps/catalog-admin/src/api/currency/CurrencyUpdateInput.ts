import { DiscountUpdateManyWithoutCurrenciesInput } from "./DiscountUpdateManyWithoutCurrenciesInput";
import { PriceUpdateManyWithoutCurrenciesInput } from "./PriceUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  discounts?: DiscountUpdateManyWithoutCurrenciesInput;
  precision?: number | null;
  prices?: PriceUpdateManyWithoutCurrenciesInput;
  symbolField?: string | null;
};
