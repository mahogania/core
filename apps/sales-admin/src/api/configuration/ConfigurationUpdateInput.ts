import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { CatalogWhereUniqueInput } from "../catalog/CatalogWhereUniqueInput";
import { ItemUpdateManyWithoutConfigurationsInput } from "./ItemUpdateManyWithoutConfigurationsInput";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";

export type ConfigurationUpdateInput = {
  bundle?: BundleWhereUniqueInput | null;
  catalog?: CatalogWhereUniqueInput | null;
  lineItems?: ItemUpdateManyWithoutConfigurationsInput;
  pipeline?: PipelineWhereUniqueInput;
};
