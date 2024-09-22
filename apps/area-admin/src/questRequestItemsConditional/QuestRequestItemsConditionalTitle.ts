import { QuestRequestItemsConditional as TQuestRequestItemsConditional } from "../api/questRequestItemsConditional/QuestRequestItemsConditional";

export const QUESTREQUESTITEMSCONDITIONAL_TITLE_FIELD = "id";

export const QuestRequestItemsConditionalTitle = (
  record: TQuestRequestItemsConditional
): string => {
  return record.id?.toString() || String(record.id);
};
