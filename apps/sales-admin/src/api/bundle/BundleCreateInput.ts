import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";
import { Configuration } from "../configuration/Configuration";
import { FeatureCreateNestedManyWithoutBundlesInput } from "./FeatureCreateNestedManyWithoutBundlesInput";

export type BundleCreateInput = {
  Configuration: ConfigurationWhereUniqueInput;
  features?: FeatureCreateNestedManyWithoutBundlesInput;
};
