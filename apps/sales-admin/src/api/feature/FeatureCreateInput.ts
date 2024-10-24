import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { OptionCreateNestedManyWithoutFeaturesInput } from "./OptionCreateNestedManyWithoutFeaturesInput";
import { StrengthWhereUniqueInput } from "../strength/StrengthWhereUniqueInput";
import { WeaknessWhereUniqueInput } from "../weakness/WeaknessWhereUniqueInput";

export type FeatureCreateInput = {
  bundle?: BundleWhereUniqueInput | null;
  displayName?: string | null;
  name?: string | null;
  options?: OptionCreateNestedManyWithoutFeaturesInput;
  strength?: StrengthWhereUniqueInput | null;
  weakness?: WeaknessWhereUniqueInput | null;
};
