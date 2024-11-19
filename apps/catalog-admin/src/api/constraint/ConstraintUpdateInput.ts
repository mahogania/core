import { OptionWhereUniqueInput } from "../option/OptionWhereUniqueInput";

export type ConstraintUpdateInput = {
  depth?: number | null;
  drivenOption?: OptionWhereUniqueInput | null;
  drivingOption?: OptionWhereUniqueInput | null;
  kind?: "Allow" | "Forbid" | "Force" | null;
};
