import { QuestTemplate as TQuestTemplate } from "../api/questTemplate/QuestTemplate";

export const QUESTTEMPLATE_TITLE_FIELD = "id";

export const QuestTemplateTitle = (record: TQuestTemplate): string => {
  return record.id?.toString() || String(record.id);
};
