import { PlayerFactionSpell as TPlayerFactionSpell } from "../api/playerFactionSpell/PlayerFactionSpell";

export const PLAYERFACTIONSPELL_TITLE_FIELD = "id";

export const PlayerFactionSpellTitle = (
  record: TPlayerFactionSpell
): string => {
  return record.id?.toString() || String(record.id);
};
