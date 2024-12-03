import { QuestCompletionConditional as TQuestCompletionConditional } from "../api/questCompletionConditional/QuestCompletionConditional";

export const QUESTCOMPLETIONCONDITIONAL_TITLE_FIELD = "id";

export const QuestCompletionConditionalTitle = (
  record: TQuestCompletionConditional
): string => {
  return record.id?.toString() || String(record.id);
};
