import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { ConstraintWhereUniqueInput } from "../constraint/ConstraintWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OptionUpdateInput = {
  discount?: DiscountWhereUniqueInput | null;
  drivingConstraints?: ConstraintWhereUniqueInput | null;
  feature?: FeatureWhereUniqueInput | null;
  leadingConstraints?: ConstraintWhereUniqueInput | null;
  price?: PriceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
