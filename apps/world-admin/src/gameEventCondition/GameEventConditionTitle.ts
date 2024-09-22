import { GameEventCondition as TGameEventCondition } from "../api/gameEventCondition/GameEventCondition";

export const GAMEEVENTCONDITION_TITLE_FIELD = "description";

export const GameEventConditionTitle = (
  record: TGameEventCondition
): string => {
  return record.description?.toString() || String(record.id);
};
