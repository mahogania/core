import { Creature as TCreature } from "../api/creature/Creature";

export const CREATURE_TITLE_FIELD = "behaviourName";

export const CreatureTitle = (record: TCreature): string => {
  return record.behaviourName?.toString() || String(record.id);
};
