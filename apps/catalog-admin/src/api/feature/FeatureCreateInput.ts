import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { OptionCreateNestedManyWithoutFeaturesInput } from "./OptionCreateNestedManyWithoutFeaturesInput";
import { StrengthCreateNestedManyWithoutFeaturesInput } from "./StrengthCreateNestedManyWithoutFeaturesInput";
import { WeaknessCreateNestedManyWithoutFeaturesInput } from "./WeaknessCreateNestedManyWithoutFeaturesInput";

export type FeatureCreateInput = {
  bundle?: BundleWhereUniqueInput | null;
  displayName?: string | null;
  name?: string | null;
  options?: OptionCreateNestedManyWithoutFeaturesInput;
  strength?: StrengthCreateNestedManyWithoutFeaturesInput;
  weaknesses?: WeaknessCreateNestedManyWithoutFeaturesInput;
};
