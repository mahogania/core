import { Unit as TUnit } from "../api/unit/Unit";

export const UNIT_TITLE_FIELD = "id";

export const UnitTitle = (record: TUnit): string => {
  return record.id?.toString() || String(record.id);
};
