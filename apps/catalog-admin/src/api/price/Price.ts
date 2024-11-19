import { Currency } from "../currency/Currency";
import { Option } from "../option/Option";

export type Price = {
  createdAt: Date;
  currency?: Currency | null;
  id: string;
  options?: Option | null;
  priceRuleUrl: string | null;
  updatedAt: Date;
};
