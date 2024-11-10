import { GameObjectTemplateAddon as TGameObjectTemplateAddon } from "../api/gameObjectTemplateAddon/GameObjectTemplateAddon";

export const GAMEOBJECTTEMPLATEADDON_TITLE_FIELD = "id";

export const GameObjectTemplateAddonTitle = (
  record: TGameObjectTemplateAddon
): string => {
  return record.id?.toString() || String(record.id);
};
