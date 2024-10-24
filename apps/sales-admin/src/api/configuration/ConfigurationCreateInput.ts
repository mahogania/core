import { ItemCreateNestedManyWithoutConfigurationsInput } from "./ItemCreateNestedManyWithoutConfigurationsInput";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";

export type ConfigurationCreateInput = {
  lineItems?: ItemCreateNestedManyWithoutConfigurationsInput;
  processConfiguration?: PipelineWhereUniqueInput | null;
  productConfiguration?: BundleWhereUniqueInput | null;
};
