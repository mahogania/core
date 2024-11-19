import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { ConstraintWhereUniqueInput } from "../constraint/ConstraintWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OptionWhereInput = {
  discount?: DiscountWhereUniqueInput;
  drivingConstraints?: ConstraintWhereUniqueInput;
  feature?: FeatureWhereUniqueInput;
  id?: StringFilter;
  leadingConstraints?: ConstraintWhereUniqueInput;
  price?: PriceWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
