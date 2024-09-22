import { PlayerFactionchangeSpells as TPlayerFactionchangeSpells } from "../api/playerFactionchangeSpells/PlayerFactionchangeSpells";

export const PLAYERFACTIONCHANGESPELLS_TITLE_FIELD = "id";

export const PlayerFactionchangeSpellsTitle = (
  record: TPlayerFactionchangeSpells
): string => {
  return record.id?.toString() || String(record.id);
};
