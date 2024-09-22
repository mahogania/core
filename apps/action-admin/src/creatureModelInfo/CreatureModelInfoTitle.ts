import { CreatureModelInfo as TCreatureModelInfo } from "../api/creatureModelInfo/CreatureModelInfo";

export const CREATUREMODELINFO_TITLE_FIELD = "id";

export const CreatureModelInfoTitle = (record: TCreatureModelInfo): string => {
  return record.id?.toString() || String(record.id);
};
