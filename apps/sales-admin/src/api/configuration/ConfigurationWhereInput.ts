import { BundleWhereUniqueInput } from "../bundle/BundleWhereUniqueInput";
import { CatalogWhereUniqueInput } from "../catalog/CatalogWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";

export type ConfigurationWhereInput = {
  bundle?: BundleWhereUniqueInput;
  catalog?: CatalogWhereUniqueInput;
  id?: StringFilter;
  lineItems?: ItemListRelationFilter;
  pipeline?: PipelineWhereUniqueInput;
};
