import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OptionUpdateManyWithoutDiscountsInput } from "./OptionUpdateManyWithoutDiscountsInput";

export type DiscountUpdateInput = {
  currency?: CurrencyWhereUniqueInput | null;
  discountRuleUrl?: string | null;
  options?: OptionUpdateManyWithoutDiscountsInput;
};
