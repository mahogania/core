import { FeatureCreateNestedManyWithoutBundlesInput } from "./FeatureCreateNestedManyWithoutBundlesInput";
import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type BundleCreateInput = {
  features?: FeatureCreateNestedManyWithoutBundlesInput;
  lineItemConfiguration?: ConfigurationWhereUniqueInput | null;
};
