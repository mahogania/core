import { CharacterDialogue as TCharacterDialogue } from "../api/characterDialogue/CharacterDialogue";

export const CHARACTERDIALOGUE_TITLE_FIELD = "id";

export const CharacterDialogueTitle = (record: TCharacterDialogue): string => {
  return record.id?.toString() || String(record.id);
};
