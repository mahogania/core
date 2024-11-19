import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { Configuration } from "../configuration/Configuration";
import { FeatureUpdateManyWithoutBundlesInput } from "./FeatureUpdateManyWithoutBundlesInput";

export type BundleUpdateInput = {
  Configuration?: ConfigurationWhereUniqueInput;
  features?: FeatureUpdateManyWithoutBundlesInput;
};
