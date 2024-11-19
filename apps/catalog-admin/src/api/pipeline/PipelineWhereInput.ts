import { ConfigurationListRelationFilter } from "../configuration/ConfigurationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProcessListRelationFilter } from "../process/ProcessListRelationFilter";

export type PipelineWhereInput = {
  Configurations?: ConfigurationListRelationFilter;
  id?: StringFilter;
  processes?: ProcessListRelationFilter;
};
