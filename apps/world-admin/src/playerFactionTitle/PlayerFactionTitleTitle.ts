import { PlayerFactionTitle as TPlayerFactionTitle } from "../api/playerFactionTitle/PlayerFactionTitle";

export const PLAYERFACTIONTITLE_TITLE_FIELD = "id";

export const PlayerFactionTitleTitle = (
  record: TPlayerFactionTitle
): string => {
  return record.id?.toString() || String(record.id);
};
