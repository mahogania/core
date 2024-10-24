import { FeatureUpdateManyWithoutBundlesInput } from "./FeatureUpdateManyWithoutBundlesInput";
import { ConfigurationWhereUniqueInput } from "../configuration/ConfigurationWhereUniqueInput";

export type BundleUpdateInput = {
  features?: FeatureUpdateManyWithoutBundlesInput;
  lineItemConfiguration?: ConfigurationWhereUniqueInput | null;
};
