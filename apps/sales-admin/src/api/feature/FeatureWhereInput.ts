import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { StrengthWhereUniqueInput } from "../strength/StrengthWhereUniqueInput";
import { WeaknessWhereUniqueInput } from "../weakness/WeaknessWhereUniqueInput";

export type FeatureWhereInput = {
  bundle?: BundleWhereUniqueInput;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  options?: OptionListRelationFilter;
  strength?: StrengthWhereUniqueInput;
  weakness?: WeaknessWhereUniqueInput;
};
