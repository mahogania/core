import { QuestObjectiveCompletionEffectWhereUniqueInput } from "../questObjectiveCompletionEffect/QuestObjectiveCompletionEffectWhereUniqueInput";
import { QuestObjectiveLocaleWhereUniqueInput } from "../questObjectiveLocale/QuestObjectiveLocaleWhereUniqueInput";
import { QuestRegionWhereUniqueInput } from "../questRegion/QuestRegionWhereUniqueInput";
import { QuestTemplateCreateNestedManyWithoutQuestObjectivesInput } from "./QuestTemplateCreateNestedManyWithoutQuestObjectivesInput";

export type QuestObjectiveCreateInput = {
  questObjectiveCompletionEffects?: QuestObjectiveCompletionEffectWhereUniqueInput | null;
  questObjectiveLocales?: QuestObjectiveLocaleWhereUniqueInput | null;
  questPois?: QuestRegionWhereUniqueInput | null;
  questTemplates?: QuestTemplateCreateNestedManyWithoutQuestObjectivesInput;
};
