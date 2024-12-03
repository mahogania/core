import { GameEventCharacter as TGameEventCharacter } from "../api/gameEventCharacter/GameEventCharacter";

export const GAMEEVENTCHARACTER_TITLE_FIELD = "id";

export const GameEventCharacterTitle = (
  record: TGameEventCharacter
): string => {
  return record.id?.toString() || String(record.id);
};
