import { QuestRewardItem as TQuestRewardItem } from "../api/questRewardItem/QuestRewardItem";

export const QUESTREWARDITEM_TITLE_FIELD = "id";

export const QuestRewardItemTitle = (record: TQuestRewardItem): string => {
  return record.id?.toString() || String(record.id);
};
