import { PipelineWhereUniqueInput } from "../pipeline/PipelineWhereUniqueInput";
import { Pipeline } from "../pipeline/Pipeline";
import { FormListRelationFilter } from "../form/FormListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ThreatListRelationFilter } from "../threat/ThreatListRelationFilter";

export type ProcessWhereInput = {
  Pipeline?: PipelineWhereUniqueInput;
  forms?: FormListRelationFilter;
  id?: StringFilter;
  threats?: ThreatListRelationFilter;
};
