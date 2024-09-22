import { PhaseName as TPhaseName } from "../api/phaseName/PhaseName";

export const PHASENAME_TITLE_FIELD = "id";

export const PhaseNameTitle = (record: TPhaseName): string => {
  return record.id?.toString() || String(record.id);
};
