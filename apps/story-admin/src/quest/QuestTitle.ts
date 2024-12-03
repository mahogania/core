import { Quest as TQuest } from "../api/quest/Quest";

export const QUEST_TITLE_FIELD = "id";

export const QuestTitle = (record: TQuest): string => {
  return record.id?.toString() || String(record.id);
};
