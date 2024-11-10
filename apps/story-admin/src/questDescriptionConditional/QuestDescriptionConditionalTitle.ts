import { QuestDescriptionConditional as TQuestDescriptionConditional } from "../api/questDescriptionConditional/QuestDescriptionConditional";

export const QUESTDESCRIPTIONCONDITIONAL_TITLE_FIELD = "id";

export const QuestDescriptionConditionalTitle = (
  record: TQuestDescriptionConditional
): string => {
  return record.id?.toString() || String(record.id);
};
