import { QuestGreetingLocale as TQuestGreetingLocale } from "../api/questGreetingLocale/QuestGreetingLocale";

export const QUESTGREETINGLOCALE_TITLE_FIELD = "id";

export const QuestGreetingLocaleTitle = (
  record: TQuestGreetingLocale
): string => {
  return record.id?.toString() || String(record.id);
};
