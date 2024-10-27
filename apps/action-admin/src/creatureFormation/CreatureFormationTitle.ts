import { CreatureFormation as TCreatureFormation } from "../api/creatureFormation/CreatureFormation";

export const CREATUREFORMATION_TITLE_FIELD = "boxId";

export const CreatureFormationTitle = (record: TCreatureFormation): string => {
  return record.boxId?.toString() || String(record.id);
};
