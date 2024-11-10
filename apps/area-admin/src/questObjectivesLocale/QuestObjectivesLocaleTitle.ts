import { QuestObjectivesLocale as TQuestObjectivesLocale } from "../api/questObjectivesLocale/QuestObjectivesLocale";

export const QUESTOBJECTIVESLOCALE_TITLE_FIELD = "id";

export const QuestObjectivesLocaleTitle = (
  record: TQuestObjectivesLocale
): string => {
  return record.id?.toString() || String(record.id);
};
