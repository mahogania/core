import { QuestCompletionLogConditional as TQuestCompletionLogConditional } from "../api/questCompletionLogConditional/QuestCompletionLogConditional";

export const QUESTCOMPLETIONLOGCONDITIONAL_TITLE_FIELD = "id";

export const QuestCompletionLogConditionalTitle = (
  record: TQuestCompletionLogConditional
): string => {
  return record.id?.toString() || String(record.id);
};
