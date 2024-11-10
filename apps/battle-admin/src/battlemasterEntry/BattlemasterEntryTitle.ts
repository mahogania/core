import { BattlemasterEntry as TBattlemasterEntry } from "../api/battlemasterEntry/BattlemasterEntry";

export const BATTLEMASTERENTRY_TITLE_FIELD = "id";

export const BattlemasterEntryTitle = (record: TBattlemasterEntry): string => {
  return record.id?.toString() || String(record.id);
};
