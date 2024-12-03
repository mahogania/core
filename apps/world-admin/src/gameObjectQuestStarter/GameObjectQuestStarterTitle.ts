import { GameObjectQuestStarter as TGameObjectQuestStarter } from "../api/gameObjectQuestStarter/GameObjectQuestStarter";

export const GAMEOBJECTQUESTSTARTER_TITLE_FIELD = "id";

export const GameObjectQuestStarterTitle = (
  record: TGameObjectQuestStarter
): string => {
  return record.id?.toString() || String(record.id);
};
