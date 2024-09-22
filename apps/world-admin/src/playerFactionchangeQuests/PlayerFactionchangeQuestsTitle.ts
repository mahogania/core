import { PlayerFactionchangeQuests as TPlayerFactionchangeQuests } from "../api/playerFactionchangeQuests/PlayerFactionchangeQuests";

export const PLAYERFACTIONCHANGEQUESTS_TITLE_FIELD = "id";

export const PlayerFactionchangeQuestsTitle = (
  record: TPlayerFactionchangeQuests
): string => {
  return record.id?.toString() || String(record.id);
};
