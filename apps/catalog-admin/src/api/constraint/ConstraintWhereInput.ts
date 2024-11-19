import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type ConstraintWhereInput = {
  depth?: IntNullableFilter;
  drivenOption?: OptionWhereUniqueInput;
  drivingOption?: OptionWhereUniqueInput;
  id?: StringFilter;
  kind?: "Allow" | "Forbid" | "Force";
};
