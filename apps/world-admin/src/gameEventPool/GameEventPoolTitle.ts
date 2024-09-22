import { GameEventPool as TGameEventPool } from "../api/gameEventPool/GameEventPool";

export const GAMEEVENTPOOL_TITLE_FIELD = "id";

export const GameEventPoolTitle = (record: TGameEventPool): string => {
  return record.id?.toString() || String(record.id);
};
