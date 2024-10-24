import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { CatalogWhereUniqueInput } from "../catalog/CatalogWhereUniqueInput";
import { ItemCreateNestedManyWithoutConfigurationsInput } from "./ItemCreateNestedManyWithoutConfigurationsInput";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";

export type ConfigurationCreateInput = {
  bundle: BundleWhereUniqueInput | null;
  catalog?: CatalogWhereUniqueInput | null;
  lineItems?: ItemCreateNestedManyWithoutConfigurationsInput;
  pipeline: PipelineWhereUniqueInput;
};
