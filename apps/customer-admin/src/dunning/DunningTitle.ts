import { Dunning as TDunning } from "../api/dunning/Dunning";

export const DUNNING_TITLE_FIELD = "customerName";

export const DunningTitle = (record: TDunning): string => {
  return record.customerName?.toString() || String(record.id);
};
