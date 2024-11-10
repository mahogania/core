import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { FeatureCreateNestedManyWithoutWeaknessesInput } from "./FeatureCreateNestedManyWithoutWeaknessesInput";

export type WeaknessCreateInput = {
  competitor?: BusinessWhereUniqueInput | null;
  features?: FeatureCreateNestedManyWithoutWeaknessesInput;
};
