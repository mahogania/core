import { QuestRequestItemsLocale as TQuestRequestItemsLocale } from "../api/questRequestItemsLocale/QuestRequestItemsLocale";

export const QUESTREQUESTITEMSLOCALE_TITLE_FIELD = "id";

export const QuestRequestItemsLocaleTitle = (
  record: TQuestRequestItemsLocale
): string => {
  return record.id?.toString() || String(record.id);
};
