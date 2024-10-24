import { ItemUpdateManyWithoutConfigurationsInput } from "./ItemUpdateManyWithoutConfigurationsInput";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";

export type ConfigurationUpdateInput = {
  lineItems?: ItemUpdateManyWithoutConfigurationsInput;
  processConfiguration?: PipelineWhereUniqueInput | null;
  productConfiguration?: BundleWhereUniqueInput | null;
};
