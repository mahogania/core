import { GameEventGameObject as TGameEventGameObject } from "../api/gameEventGameObject/GameEventGameObject";

export const GAMEEVENTGAMEOBJECT_TITLE_FIELD = "id";

export const GameEventGameObjectTitle = (
  record: TGameEventGameObject
): string => {
  return record.id?.toString() || String(record.id);
};
