import { QuestObjectiveCompletionEffectWhereUniqueInput } from "../questObjectiveCompletionEffect/QuestObjectiveCompletionEffectWhereUniqueInput";
import { QuestObjectiveLocaleWhereUniqueInput } from "../questObjectiveLocale/QuestObjectiveLocaleWhereUniqueInput";
import { QuestRegionWhereUniqueInput } from "../questRegion/QuestRegionWhereUniqueInput";
import { QuestTemplateUpdateManyWithoutQuestObjectivesInput } from "./QuestTemplateUpdateManyWithoutQuestObjectivesInput";

export type QuestObjectiveUpdateInput = {
  questObjectiveCompletionEffects?: QuestObjectiveCompletionEffectWhereUniqueInput | null;
  questObjectiveLocales?: QuestObjectiveLocaleWhereUniqueInput | null;
  questPois?: QuestRegionWhereUniqueInput | null;
  questTemplates?: QuestTemplateUpdateManyWithoutQuestObjectivesInput;
};
