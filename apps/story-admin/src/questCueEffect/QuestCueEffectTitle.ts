import { QuestCueEffect as TQuestCueEffect } from "../api/questCueEffect/QuestCueEffect";

export const QUESTCUEEFFECT_TITLE_FIELD = "id";

export const QuestCueEffectTitle = (record: TQuestCueEffect): string => {
  return record.id?.toString() || String(record.id);
};
