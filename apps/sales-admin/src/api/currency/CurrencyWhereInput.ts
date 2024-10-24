import { DiscountListRelationFilter } from "../discount/DiscountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PriceListRelationFilter } from "../price/PriceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CurrencyWhereInput = {
  discounts?: DiscountListRelationFilter;
  id?: StringFilter;
  precision?: IntNullableFilter;
  prices?: PriceListRelationFilter;
  symbolField?: StringNullableFilter;
};
