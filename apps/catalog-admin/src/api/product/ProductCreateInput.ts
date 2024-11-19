import { OptionCreateNestedManyWithoutProductsInput } from "./OptionCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  options?: OptionCreateNestedManyWithoutProductsInput;
  version?: string | null;
};
