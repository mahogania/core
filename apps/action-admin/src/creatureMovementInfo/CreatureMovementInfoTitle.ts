import { CreatureMovementInfo as TCreatureMovementInfo } from "../api/creatureMovementInfo/CreatureMovementInfo";

export const CREATUREMOVEMENTINFO_TITLE_FIELD = "movementId";

export const CreatureMovementInfoTitle = (
  record: TCreatureMovementInfo
): string => {
  return record.movementId?.toString() || String(record.id);
};
