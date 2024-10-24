import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type ConstraintWhereInput = {
  ascendantProduct?: ProductWhereUniqueInput;
  depth?: IntNullableFilter;
  descendantProduct?: ProductWhereUniqueInput;
  id?: StringFilter;
  kind?: "Allow" | "Forbid";
  option?: OptionWhereUniqueInput;
};
