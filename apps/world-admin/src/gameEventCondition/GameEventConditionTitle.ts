import { GameEventCondition as TGameEventCondition } from "../api/gameEventCondition/GameEventCondition";

export const GAMEEVENTCONDITION_TITLE_FIELD = "name";

export const GameEventConditionTitle = (
  record: TGameEventCondition
): string => {
  return record.name?.toString() || String(record.id);
};
