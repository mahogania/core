import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConstraintWhereInput = {
  depth?: IntNullableFilter;
  id?: StringFilter;
  kind?: "Allow" | "Forbid" | "Force";
};
