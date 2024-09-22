import { CreatureMovementInfo as TCreatureMovementInfo } from "../api/creatureMovementInfo/CreatureMovementInfo";

export const CREATUREMOVEMENTINFO_TITLE_FIELD = "id";

export const CreatureMovementInfoTitle = (
  record: TCreatureMovementInfo
): string => {
  return record.id?.toString() || String(record.id);
};
