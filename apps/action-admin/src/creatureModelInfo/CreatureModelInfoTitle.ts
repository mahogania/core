import { CreatureModelInfo as TCreatureModelInfo } from "../api/creatureModelInfo/CreatureModelInfo";

export const CREATUREMODELINFO_TITLE_FIELD = "displayId";

export const CreatureModelInfoTitle = (record: TCreatureModelInfo): string => {
  return record.displayId?.toString() || String(record.id);
};
