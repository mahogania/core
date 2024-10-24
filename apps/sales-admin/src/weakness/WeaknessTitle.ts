import { Weakness as TWeakness } from "../api/weakness/Weakness";

export const WEAKNESS_TITLE_FIELD = "id";

export const WeaknessTitle = (record: TWeakness): string => {
  return record.id?.toString() || String(record.id);
};
