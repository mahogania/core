import { QuestRequestItemConditional as TQuestRequestItemConditional } from "../api/questRequestItemConditional/QuestRequestItemConditional";

export const QUESTREQUESTITEMCONDITIONAL_TITLE_FIELD = "id";

export const QuestRequestItemConditionalTitle = (
  record: TQuestRequestItemConditional
): string => {
  return record.id?.toString() || String(record.id);
};
