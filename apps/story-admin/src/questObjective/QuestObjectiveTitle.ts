import { QuestObjective as TQuestObjective } from "../api/questObjective/QuestObjective";

export const QUESTOBJECTIVE_TITLE_FIELD = "id";

export const QuestObjectiveTitle = (record: TQuestObjective): string => {
  return record.id?.toString() || String(record.id);
};
