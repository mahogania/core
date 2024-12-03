import { GameObjectTemplateLocale as TGameObjectTemplateLocale } from "../api/gameObjectTemplateLocale/GameObjectTemplateLocale";

export const GAMEOBJECTTEMPLATELOCALE_TITLE_FIELD = "id";

export const GameObjectTemplateLocaleTitle = (
  record: TGameObjectTemplateLocale
): string => {
  return record.id?.toString() || String(record.id);
};
