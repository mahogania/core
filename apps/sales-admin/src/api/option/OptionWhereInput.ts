import { ConstraintListRelationFilter } from "../constraint/ConstraintListRelationFilter";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OptionWhereInput = {
  constraintPaths?: ConstraintListRelationFilter;
  discount?: DiscountWhereUniqueInput;
  feature?: FeatureWhereUniqueInput;
  id?: StringFilter;
  price?: PriceWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
