import { CreatureQuestItem as TCreatureQuestItem } from "../api/creatureQuestItem/CreatureQuestItem";

export const CREATUREQUESTITEM_TITLE_FIELD = "id";

export const CreatureQuestItemTitle = (record: TCreatureQuestItem): string => {
  return record.id?.toString() || String(record.id);
};
