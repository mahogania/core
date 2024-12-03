import { QuestObjectiveCompletionEffect as TQuestObjectiveCompletionEffect } from "../api/questObjectiveCompletionEffect/QuestObjectiveCompletionEffect";

export const QUESTOBJECTIVECOMPLETIONEFFECT_TITLE_FIELD = "id";

export const QuestObjectiveCompletionEffectTitle = (
  record: TQuestObjectiveCompletionEffect
): string => {
  return record.id?.toString() || String(record.id);
};
