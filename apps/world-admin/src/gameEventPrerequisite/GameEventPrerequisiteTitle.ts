import { GameEventPrerequisite as TGameEventPrerequisite } from "../api/gameEventPrerequisite/GameEventPrerequisite";

export const GAMEEVENTPREREQUISITE_TITLE_FIELD = "id";

export const GameEventPrerequisiteTitle = (
  record: TGameEventPrerequisite
): string => {
  return record.id?.toString() || String(record.id);
};
