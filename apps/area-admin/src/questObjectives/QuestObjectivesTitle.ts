import { QuestObjectives as TQuestObjectives } from "../api/questObjectives/QuestObjectives";

export const QUESTOBJECTIVES_TITLE_FIELD = "id";

export const QuestObjectivesTitle = (record: TQuestObjectives): string => {
  return record.id?.toString() || String(record.id);
};
