import { QuestRequestItems as TQuestRequestItems } from "../api/questRequestItems/QuestRequestItems";

export const QUESTREQUESTITEMS_TITLE_FIELD = "id";

export const QuestRequestItemsTitle = (record: TQuestRequestItems): string => {
  return record.id?.toString() || String(record.id);
};
