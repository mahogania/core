import { GameObjectQuestEnder as TGameObjectQuestEnder } from "../api/gameObjectQuestEnder/GameObjectQuestEnder";

export const GAMEOBJECTQUESTENDER_TITLE_FIELD = "id";

export const GameObjectQuestEnderTitle = (
  record: TGameObjectQuestEnder
): string => {
  return record.id?.toString() || String(record.id);
};
