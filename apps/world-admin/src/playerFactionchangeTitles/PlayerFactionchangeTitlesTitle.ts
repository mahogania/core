import { PlayerFactionchangeTitles as TPlayerFactionchangeTitles } from "../api/playerFactionchangeTitles/PlayerFactionchangeTitles";

export const PLAYERFACTIONCHANGETITLES_TITLE_FIELD = "id";

export const PlayerFactionchangeTitlesTitle = (
  record: TPlayerFactionchangeTitles
): string => {
  return record.id?.toString() || String(record.id);
};
