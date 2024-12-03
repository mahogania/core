import { ServersideSpell as TServersideSpell } from "../api/serversideSpell/ServersideSpell";

export const SERVERSIDESPELL_TITLE_FIELD = "id";

export const ServersideSpellTitle = (record: TServersideSpell): string => {
  return record.id?.toString() || String(record.id);
};
