import { OptionUpdateManyWithoutProductsInput } from "./OptionUpdateManyWithoutProductsInput";
import { ConstraintWhereUniqueInput } from "../constraint/ConstraintWhereUniqueInput";

export type ProductUpdateInput = {
  options?: OptionUpdateManyWithoutProductsInput;
  predecessorProductPaths?: ConstraintWhereUniqueInput | null;
  successorProductPaths?: ConstraintWhereUniqueInput | null;
  version?: string | null;
};
