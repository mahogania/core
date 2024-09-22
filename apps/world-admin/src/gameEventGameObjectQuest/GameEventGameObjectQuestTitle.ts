import { GameEventGameObjectQuest as TGameEventGameObjectQuest } from "../api/gameEventGameObjectQuest/GameEventGameObjectQuest";

export const GAMEEVENTGAMEOBJECTQUEST_TITLE_FIELD = "id";

export const GameEventGameObjectQuestTitle = (
  record: TGameEventGameObjectQuest
): string => {
  return record.id?.toString() || String(record.id);
};
