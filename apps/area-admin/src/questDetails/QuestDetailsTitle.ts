import { QuestDetails as TQuestDetails } from "../api/questDetails/QuestDetails";

export const QUESTDETAILS_TITLE_FIELD = "id";

export const QuestDetailsTitle = (record: TQuestDetails): string => {
  return record.id?.toString() || String(record.id);
};
