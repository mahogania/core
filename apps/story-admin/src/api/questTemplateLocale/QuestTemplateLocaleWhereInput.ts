import { StringFilter } from "../../util/StringFilter";
import { QuestTemplateListRelationFilter } from "../questTemplate/QuestTemplateListRelationFilter";

export type QuestTemplateLocaleWhereInput = {
  id?: StringFilter;
  questTemplates?: QuestTemplateListRelationFilter;
};
