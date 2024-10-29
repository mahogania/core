import { StringFilter } from "../../util/StringFilter";
import { InstanceTemplateListRelationFilter } from "../instanceTemplate/InstanceTemplateListRelationFilter";

export type LinkedRespawnWhereInput = {
  id?: StringFilter;
  instanceTemplates?: InstanceTemplateListRelationFilter;
};
