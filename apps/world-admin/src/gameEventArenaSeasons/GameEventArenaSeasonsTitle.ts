import { GameEventArenaSeasons as TGameEventArenaSeasons } from "../api/gameEventArenaSeasons/GameEventArenaSeasons";

export const GAMEEVENTARENASEASONS_TITLE_FIELD = "id";

export const GameEventArenaSeasonsTitle = (
  record: TGameEventArenaSeasons
): string => {
  return record.id?.toString() || String(record.id);
};
