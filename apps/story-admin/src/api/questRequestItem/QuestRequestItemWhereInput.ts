import { StringFilter } from "../../util/StringFilter";
import { QuestRequestItemConditionalListRelationFilter } from "../questRequestItemConditional/QuestRequestItemConditionalListRelationFilter";
import { QuestRequestItemsLocaleListRelationFilter } from "../questRequestItemsLocale/QuestRequestItemsLocaleListRelationFilter";
import { QuestTemplateListRelationFilter } from "../questTemplate/QuestTemplateListRelationFilter";

export type QuestRequestItemWhereInput = {
  id?: StringFilter;
  questRequestItemConditionals?: QuestRequestItemConditionalListRelationFilter;
  questRequestItemsLocales?: QuestRequestItemsLocaleListRelationFilter;
  questTemplates?: QuestTemplateListRelationFilter;
};
