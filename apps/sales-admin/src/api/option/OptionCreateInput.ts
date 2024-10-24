import { ConstraintCreateNestedManyWithoutOptionsInput } from "./ConstraintCreateNestedManyWithoutOptionsInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OptionCreateInput = {
  constraintPaths?: ConstraintCreateNestedManyWithoutOptionsInput;
  discount?: DiscountWhereUniqueInput | null;
  feature?: FeatureWhereUniqueInput | null;
  price?: PriceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
