import { GameObject as TGameObject } from "../api/gameObject/GameObject";

export const GAMEOBJECT_TITLE_FIELD = "stringId";

export const GameObjectTitle = (record: TGameObject): string => {
  return record.stringId?.toString() || String(record.id);
};
