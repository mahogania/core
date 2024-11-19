import { Faction as TFaction } from "../api/faction/Faction";

export const FACTION_TITLE_FIELD = "id";

export const FactionTitle = (record: TFaction): string => {
  return record.id?.toString() || String(record.id);
};
