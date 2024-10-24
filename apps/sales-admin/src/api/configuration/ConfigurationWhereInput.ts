import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";

export type ConfigurationWhereInput = {
  id?: StringFilter;
  lineItems?: ItemListRelationFilter;
  processConfiguration?: PipelineWhereUniqueInput;
  productConfiguration?: BundleWhereUniqueInput;
};
