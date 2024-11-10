import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OptionListRelationFilter } from "../option/OptionListRelationFilter";
import { StrengthListRelationFilter } from "../strength/StrengthListRelationFilter";
import { WeaknessListRelationFilter } from "../weakness/WeaknessListRelationFilter";

export type FeatureWhereInput = {
  bundle?: BundleWhereUniqueInput;
  displayName?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  options?: OptionListRelationFilter;
  strength?: StrengthListRelationFilter;
  weaknesses?: WeaknessListRelationFilter;
};
