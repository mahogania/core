import { GameEvent as TGameEvent } from "../api/gameEvent/GameEvent";

export const GAMEEVENT_TITLE_FIELD = "description";

export const GameEventTitle = (record: TGameEvent): string => {
  return record.description?.toString() || String(record.id);
};
