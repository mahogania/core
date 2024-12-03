import { PetLevelstats as TPetLevelstats } from "../api/petLevelstats/PetLevelstats";

export const PETLEVELSTATS_TITLE_FIELD = "id";

export const PetLevelstatsTitle = (record: TPetLevelstats): string => {
  return record.id?.toString() || String(record.id);
};
