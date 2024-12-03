import { CreatureOnKillReputation as TCreatureOnKillReputation } from "../api/creatureOnKillReputation/CreatureOnKillReputation";

export const CREATUREONKILLREPUTATION_TITLE_FIELD = "id";

export const CreatureOnKillReputationTitle = (
  record: TCreatureOnKillReputation
): string => {
  return record.id?.toString() || String(record.id);
};
