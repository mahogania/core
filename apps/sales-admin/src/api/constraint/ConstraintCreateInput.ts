import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type ConstraintCreateInput = {
  ascendantProduct?: ProductWhereUniqueInput | null;
  depth?: number | null;
  descendantProduct?: ProductWhereUniqueInput | null;
  kind?: "Allow" | "Forbid" | null;
  option?: OptionWhereUniqueInput | null;
};
