import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { FeatureCreateNestedManyWithoutStrengthsInput } from "./FeatureCreateNestedManyWithoutStrengthsInput";

export type StrengthCreateInput = {
  competitor?: BusinessWhereUniqueInput | null;
  features?: FeatureCreateNestedManyWithoutStrengthsInput;
};
