import { GameEventCreatureQuest as TGameEventCreatureQuest } from "../api/gameEventCreatureQuest/GameEventCreatureQuest";

export const GAMEEVENTCREATUREQUEST_TITLE_FIELD = "id";

export const GameEventCreatureQuestTitle = (
  record: TGameEventCreatureQuest
): string => {
  return record.id?.toString() || String(record.id);
};
