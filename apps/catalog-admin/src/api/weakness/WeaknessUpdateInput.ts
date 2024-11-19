import { BusinessWhereUniqueInput } from "../business/BusinessWhereUniqueInput";
import { FeatureUpdateManyWithoutWeaknessesInput } from "./FeatureUpdateManyWithoutWeaknessesInput";

export type WeaknessUpdateInput = {
  competitor?: BusinessWhereUniqueInput | null;
  features?: FeatureUpdateManyWithoutWeaknessesInput;
};
