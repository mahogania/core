import { QuestTemplateAddon as TQuestTemplateAddon } from "../api/questTemplateAddon/QuestTemplateAddon";

export const QUESTTEMPLATEADDON_TITLE_FIELD = "id";

export const QuestTemplateAddonTitle = (
  record: TQuestTemplateAddon
): string => {
  return record.id?.toString() || String(record.id);
};
