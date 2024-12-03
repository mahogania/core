import { QuestRequestItem as TQuestRequestItem } from "../api/questRequestItem/QuestRequestItem";

export const QUESTREQUESTITEM_TITLE_FIELD = "id";

export const QuestRequestItemTitle = (record: TQuestRequestItem): string => {
  return record.id?.toString() || String(record.id);
};
