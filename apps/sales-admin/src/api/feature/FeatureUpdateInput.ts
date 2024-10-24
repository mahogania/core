import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { OptionUpdateManyWithoutFeaturesInput } from "./OptionUpdateManyWithoutFeaturesInput";
import { StrengthWhereUniqueInput } from "../strength/StrengthWhereUniqueInput";
import { WeaknessWhereUniqueInput } from "../weakness/WeaknessWhereUniqueInput";

export type FeatureUpdateInput = {
  bundle?: BundleWhereUniqueInput | null;
  displayName?: string | null;
  name?: string | null;
  options?: OptionUpdateManyWithoutFeaturesInput;
  strength?: StrengthWhereUniqueInput | null;
  weakness?: WeaknessWhereUniqueInput | null;
};
