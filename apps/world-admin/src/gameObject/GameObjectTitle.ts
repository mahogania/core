import { GameObject as TGameObject } from "../api/gameObject/GameObject";

export const GAMEOBJECT_TITLE_FIELD = "scriptName";

export const GameObjectTitle = (record: TGameObject): string => {
  return record.scriptName?.toString() || String(record.id);
};
