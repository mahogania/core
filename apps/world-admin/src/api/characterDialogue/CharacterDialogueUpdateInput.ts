import { CharacterUpdateManyWithoutCharacterDialoguesInput } from "./CharacterUpdateManyWithoutCharacterDialoguesInput";
import { ParagraphUpdateManyWithoutCharacterDialoguesInput } from "./ParagraphUpdateManyWithoutCharacterDialoguesInput";

export type CharacterDialogueUpdateInput = {
  characters?: CharacterUpdateManyWithoutCharacterDialoguesInput;
  paragraphs?: ParagraphUpdateManyWithoutCharacterDialoguesInput;
};
