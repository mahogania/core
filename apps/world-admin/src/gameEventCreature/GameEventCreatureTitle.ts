import { GameEventCreature as TGameEventCreature } from "../api/gameEventCreature/GameEventCreature";

export const GAMEEVENTCREATURE_TITLE_FIELD = "spawnerId";

export const GameEventCreatureTitle = (record: TGameEventCreature): string => {
  return record.spawnerId?.toString() || String(record.id);
};
