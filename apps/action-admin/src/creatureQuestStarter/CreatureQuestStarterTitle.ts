import { CreatureQuestStarter as TCreatureQuestStarter } from "../api/creatureQuestStarter/CreatureQuestStarter";

export const CREATUREQUESTSTARTER_TITLE_FIELD = "id";

export const CreatureQuestStarterTitle = (
  record: TCreatureQuestStarter
): string => {
  return record.id?.toString() || String(record.id);
};
