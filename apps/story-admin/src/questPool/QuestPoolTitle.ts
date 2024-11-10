import { QuestPool as TQuestPool } from "../api/questPool/QuestPool";

export const QUESTPOOL_TITLE_FIELD = "id";

export const QuestPoolTitle = (record: TQuestPool): string => {
  return record.id?.toString() || String(record.id);
};
