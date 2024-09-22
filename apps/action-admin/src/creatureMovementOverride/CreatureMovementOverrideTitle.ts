import { CreatureMovementOverride as TCreatureMovementOverride } from "../api/creatureMovementOverride/CreatureMovementOverride";

export const CREATUREMOVEMENTOVERRIDE_TITLE_FIELD = "id";

export const CreatureMovementOverrideTitle = (
  record: TCreatureMovementOverride
): string => {
  return record.id?.toString() || String(record.id);
};
