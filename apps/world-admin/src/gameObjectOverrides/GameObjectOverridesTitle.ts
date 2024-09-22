import { GameObjectOverrides as TGameObjectOverrides } from "../api/gameObjectOverrides/GameObjectOverrides";

export const GAMEOBJECTOVERRIDES_TITLE_FIELD = "id";

export const GameObjectOverridesTitle = (
  record: TGameObjectOverrides
): string => {
  return record.id?.toString() || String(record.id);
};
