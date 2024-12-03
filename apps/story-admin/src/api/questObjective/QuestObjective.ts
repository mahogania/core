import { QuestObjectiveCompletionEffect } from "../questObjectiveCompletionEffect/QuestObjectiveCompletionEffect";
import { QuestObjectiveLocale } from "../questObjectiveLocale/QuestObjectiveLocale";
import { QuestRegion } from "../questRegion/QuestRegion";
import { QuestTemplate } from "../questTemplate/QuestTemplate";

export type QuestObjective = {
  createdAt: Date;
  id: string;
  questObjectiveCompletionEffects?: QuestObjectiveCompletionEffect | null;
  questObjectiveLocales?: QuestObjectiveLocale | null;
  questPois?: QuestRegion | null;
  questTemplates?: Array<QuestTemplate>;
  updatedAt: Date;
};
