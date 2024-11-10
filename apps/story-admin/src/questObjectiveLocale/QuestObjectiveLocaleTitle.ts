import { QuestObjectiveLocale as TQuestObjectiveLocale } from "../api/questObjectiveLocale/QuestObjectiveLocale";

export const QUESTOBJECTIVELOCALE_TITLE_FIELD = "id";

export const QuestObjectiveLocaleTitle = (
  record: TQuestObjectiveLocale
): string => {
  return record.id?.toString() || String(record.id);
};
