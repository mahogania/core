import { Creature as TCreature } from "../api/creature/Creature";

export const CREATURE_TITLE_FIELD = "scriptName";

export const CreatureTitle = (record: TCreature): string => {
  return record.scriptName?.toString() || String(record.id);
};
