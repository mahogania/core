import { GameEventCreature as TGameEventCreature } from "../api/gameEventCreature/GameEventCreature";

export const GAMEEVENTCREATURE_TITLE_FIELD = "id";

export const GameEventCreatureTitle = (record: TGameEventCreature): string => {
  return record.id?.toString() || String(record.id);
};
