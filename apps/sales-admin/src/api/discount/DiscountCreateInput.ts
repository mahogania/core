import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { OptionCreateNestedManyWithoutDiscountsInput } from "./OptionCreateNestedManyWithoutDiscountsInput";

export type DiscountCreateInput = {
  currency?: CurrencyWhereUniqueInput | null;
  discountRuleUrl?: string | null;
  options?: OptionCreateNestedManyWithoutDiscountsInput;
};
