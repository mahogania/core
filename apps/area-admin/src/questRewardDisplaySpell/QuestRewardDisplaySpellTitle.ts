import { QuestRewardDisplaySpell as TQuestRewardDisplaySpell } from "../api/questRewardDisplaySpell/QuestRewardDisplaySpell";

export const QUESTREWARDDISPLAYSPELL_TITLE_FIELD = "id";

export const QuestRewardDisplaySpellTitle = (
  record: TQuestRewardDisplaySpell
): string => {
  return record.id?.toString() || String(record.id);
};
