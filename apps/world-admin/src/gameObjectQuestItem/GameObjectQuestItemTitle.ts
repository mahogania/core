import { GameObjectQuestItem as TGameObjectQuestItem } from "../api/gameObjectQuestItem/GameObjectQuestItem";

export const GAMEOBJECTQUESTITEM_TITLE_FIELD = "id";

export const GameObjectQuestItemTitle = (
  record: TGameObjectQuestItem
): string => {
  return record.id?.toString() || String(record.id);
};
