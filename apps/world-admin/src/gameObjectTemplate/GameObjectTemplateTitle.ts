import { GameObjectTemplate as TGameObjectTemplate } from "../api/gameObjectTemplate/GameObjectTemplate";

export const GAMEOBJECTTEMPLATE_TITLE_FIELD = "id";

export const GameObjectTemplateTitle = (
  record: TGameObjectTemplate
): string => {
  return record.id?.toString() || String(record.id);
};
