import { OptionCreateNestedManyWithoutProductsInput } from "./OptionCreateNestedManyWithoutProductsInput";
import { ConstraintWhereUniqueInput } from "../constraint/ConstraintWhereUniqueInput";

export type ProductCreateInput = {
  options?: OptionCreateNestedManyWithoutProductsInput;
  predecessorProductPaths?: ConstraintWhereUniqueInput | null;
  successorProductPaths?: ConstraintWhereUniqueInput | null;
  version?: string | null;
};
