import { QuestVisualEffect as TQuestVisualEffect } from "../api/questVisualEffect/QuestVisualEffect";

export const QUESTVISUALEFFECT_TITLE_FIELD = "id";

export const QuestVisualEffectTitle = (record: TQuestVisualEffect): string => {
  return record.id?.toString() || String(record.id);
};
