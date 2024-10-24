import { Currency } from "../currency/Currency";
import { Option } from "../option/Option";

export type Discount = {
  createdAt: Date;
  currency?: Currency | null;
  discountRuleUrl: string | null;
  id: string;
  options?: Array<Option>;
  updatedAt: Date;
};
