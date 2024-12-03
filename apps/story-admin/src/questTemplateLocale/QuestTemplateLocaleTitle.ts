import { QuestTemplateLocale as TQuestTemplateLocale } from "../api/questTemplateLocale/QuestTemplateLocale";

export const QUESTTEMPLATELOCALE_TITLE_FIELD = "id";

export const QuestTemplateLocaleTitle = (
  record: TQuestTemplateLocale
): string => {
  return record.id?.toString() || String(record.id);
};
