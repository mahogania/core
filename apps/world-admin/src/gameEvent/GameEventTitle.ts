import { GameEvent as TGameEvent } from "../api/gameEvent/GameEvent";

export const GAMEEVENT_TITLE_FIELD = "announce";

export const GameEventTitle = (record: TGameEvent): string => {
  return record.announce?.toString() || String(record.id);
};
