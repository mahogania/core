import { QuestRewardSpell as TQuestRewardSpell } from "../api/questRewardSpell/QuestRewardSpell";

export const QUESTREWARDSPELL_TITLE_FIELD = "id";

export const QuestRewardSpellTitle = (record: TQuestRewardSpell): string => {
  return record.id?.toString() || String(record.id);
};
