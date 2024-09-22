import { QuestPoolTemplate as TQuestPoolTemplate } from "../api/questPoolTemplate/QuestPoolTemplate";

export const QUESTPOOLTEMPLATE_TITLE_FIELD = "id";

export const QuestPoolTemplateTitle = (record: TQuestPoolTemplate): string => {
  return record.id?.toString() || String(record.id);
};
