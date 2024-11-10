import { StringFilter } from "../../util/StringFilter";
import { QuestObjectiveCompletionEffectWhereUniqueInput } from "../questObjectiveCompletionEffect/QuestObjectiveCompletionEffectWhereUniqueInput";
import { QuestObjectiveLocaleWhereUniqueInput } from "../questObjectiveLocale/QuestObjectiveLocaleWhereUniqueInput";
import { QuestRegionWhereUniqueInput } from "../questRegion/QuestRegionWhereUniqueInput";
import { QuestTemplateListRelationFilter } from "../questTemplate/QuestTemplateListRelationFilter";

export type QuestObjectiveWhereInput = {
  id?: StringFilter;
  questObjectiveCompletionEffects?: QuestObjectiveCompletionEffectWhereUniqueInput;
  questObjectiveLocales?: QuestObjectiveLocaleWhereUniqueInput;
  questPois?: QuestRegionWhereUniqueInput;
  questTemplates?: QuestTemplateListRelationFilter;
};
