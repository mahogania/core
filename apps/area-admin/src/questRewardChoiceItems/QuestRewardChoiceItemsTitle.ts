import { QuestRewardChoiceItems as TQuestRewardChoiceItems } from "../api/questRewardChoiceItems/QuestRewardChoiceItems";

export const QUESTREWARDCHOICEITEMS_TITLE_FIELD = "id";

export const QuestRewardChoiceItemsTitle = (
  record: TQuestRewardChoiceItems
): string => {
  return record.id?.toString() || String(record.id);
};
