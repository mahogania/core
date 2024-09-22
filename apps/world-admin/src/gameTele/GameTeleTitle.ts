import { GameTele as TGameTele } from "../api/gameTele/GameTele";

export const GAMETELE_TITLE_FIELD = "name";

export const GameTeleTitle = (record: TGameTele): string => {
  return record.name?.toString() || String(record.id);
};
