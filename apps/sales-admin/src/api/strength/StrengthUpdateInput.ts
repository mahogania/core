import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { FeatureUpdateManyWithoutStrengthsInput } from "./FeatureUpdateManyWithoutStrengthsInput";

export type StrengthUpdateInput = {
  competitor?: BusinessWhereUniqueInput | null;
  features?: FeatureUpdateManyWithoutStrengthsInput;
};
