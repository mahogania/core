import { GameObjectLootTemplate as TGameObjectLootTemplate } from "../api/gameObjectLootTemplate/GameObjectLootTemplate";

export const GAMEOBJECTLOOTTEMPLATE_TITLE_FIELD = "comment";

export const GameObjectLootTemplateTitle = (
  record: TGameObjectLootTemplate
): string => {
  return record.comment?.toString() || String(record.id);
};
