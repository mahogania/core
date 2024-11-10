import { GameObjectAddon as TGameObjectAddon } from "../api/gameObjectAddon/GameObjectAddon";

export const GAMEOBJECTADDON_TITLE_FIELD = "aiAnimKitId";

export const GameObjectAddonTitle = (record: TGameObjectAddon): string => {
  return record.aiAnimKitId?.toString() || String(record.id);
};
