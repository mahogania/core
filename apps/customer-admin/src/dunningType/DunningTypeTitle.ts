import { DunningType as TDunningType } from "../api/dunningType/DunningType";

export const DUNNINGTYPE_TITLE_FIELD = "name";

export const DunningTypeTitle = (record: TDunningType): string => {
  return record.name?.toString() || String(record.id);
};
