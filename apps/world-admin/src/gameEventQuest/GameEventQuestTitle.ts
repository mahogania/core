import { GameEventQuest as TGameEventQuest } from "../api/gameEventQuest/GameEventQuest";

export const GAMEEVENTQUEST_TITLE_FIELD = "name";

export const GameEventQuestTitle = (record: TGameEventQuest): string => {
  return record.name?.toString() || String(record.id);
};
