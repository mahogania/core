import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { OptionUpdateManyWithoutFeaturesInput } from "./OptionUpdateManyWithoutFeaturesInput";
import { StrengthUpdateManyWithoutFeaturesInput } from "./StrengthUpdateManyWithoutFeaturesInput";
import { WeaknessUpdateManyWithoutFeaturesInput } from "./WeaknessUpdateManyWithoutFeaturesInput";

export type FeatureUpdateInput = {
  bundle?: BundleWhereUniqueInput | null;
  displayName?: string | null;
  name?: string | null;
  options?: OptionUpdateManyWithoutFeaturesInput;
  strength?: StrengthUpdateManyWithoutFeaturesInput;
  weaknesses?: WeaknessUpdateManyWithoutFeaturesInput;
};
