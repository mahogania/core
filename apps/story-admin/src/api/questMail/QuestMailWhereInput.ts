import { StringFilter } from "../../util/StringFilter";
import { QuestTemplateListRelationFilter } from "../questTemplate/QuestTemplateListRelationFilter";

export type QuestMailWhereInput = {
  decription?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  questTemplates?: QuestTemplateListRelationFilter;
};
