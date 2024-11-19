import { Strength as TStrength } from "../api/strength/Strength";

export const STRENGTH_TITLE_FIELD = "id";

export const StrengthTitle = (record: TStrength): string => {
  return record.id?.toString() || String(record.id);
};
