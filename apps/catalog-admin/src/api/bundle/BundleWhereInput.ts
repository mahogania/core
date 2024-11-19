import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { Configuration } from "../configuration/Configuration";
import { FeatureListRelationFilter } from "../feature/FeatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type BundleWhereInput = {
  Configuration?: ConfigurationWhereUniqueInput;
  features?: FeatureListRelationFilter;
  id?: StringFilter;
};
