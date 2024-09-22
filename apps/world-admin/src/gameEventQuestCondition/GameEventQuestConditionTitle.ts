import { GameEventQuestCondition as TGameEventQuestCondition } from "../api/gameEventQuestCondition/GameEventQuestCondition";

export const GAMEEVENTQUESTCONDITION_TITLE_FIELD = "id";

export const GameEventQuestConditionTitle = (
  record: TGameEventQuestCondition
): string => {
  return record.id?.toString() || String(record.id);
};
