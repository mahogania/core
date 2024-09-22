import { GameObjectAddon as TGameObjectAddon } from "../api/gameObjectAddon/GameObjectAddon";

export const GAMEOBJECTADDON_TITLE_FIELD = "id";

export const GameObjectAddonTitle = (record: TGameObjectAddon): string => {
  return record.id?.toString() || String(record.id);
};
