import { ConstraintUpdateManyWithoutOptionsInput } from "./ConstraintUpdateManyWithoutOptionsInput";
import { DiscountWhereUniqueInput } from "../discount/DiscountWhereUniqueInput";
import { FeatureWhereUniqueInput } from "../feature/FeatureWhereUniqueInput";
import { PriceWhereUniqueInput } from "../price/PriceWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OptionUpdateInput = {
  constraintPaths?: ConstraintUpdateManyWithoutOptionsInput;
  discount?: DiscountWhereUniqueInput | null;
  feature?: FeatureWhereUniqueInput | null;
  price?: PriceWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
