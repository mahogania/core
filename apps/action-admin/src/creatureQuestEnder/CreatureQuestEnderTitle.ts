import { CreatureQuestEnder as TCreatureQuestEnder } from "../api/creatureQuestEnder/CreatureQuestEnder";

export const CREATUREQUESTENDER_TITLE_FIELD = "id";

export const CreatureQuestEnderTitle = (
  record: TCreatureQuestEnder
): string => {
  return record.id?.toString() || String(record.id);
};
