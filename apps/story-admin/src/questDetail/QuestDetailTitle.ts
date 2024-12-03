import { QuestDetail as TQuestDetail } from "../api/questDetail/QuestDetail";

export const QUESTDETAIL_TITLE_FIELD = "name";

export const QuestDetailTitle = (record: TQuestDetail): string => {
  return record.name?.toString() || String(record.id);
};
