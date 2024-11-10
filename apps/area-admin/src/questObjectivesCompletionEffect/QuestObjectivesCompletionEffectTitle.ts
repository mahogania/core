import { QuestObjectivesCompletionEffect as TQuestObjectivesCompletionEffect } from "../api/questObjectivesCompletionEffect/QuestObjectivesCompletionEffect";

export const QUESTOBJECTIVESCOMPLETIONEFFECT_TITLE_FIELD = "id";

export const QuestObjectivesCompletionEffectTitle = (
  record: TQuestObjectivesCompletionEffect
): string => {
  return record.id?.toString() || String(record.id);
};
