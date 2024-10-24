import { FeatureListRelationFilter } from "../feature/FeatureListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type BundleWhereInput = {
  features?: FeatureListRelationFilter;
  id?: StringFilter;
  lineItemConfiguration?: ConfigurationWhereUniqueInput;
};
