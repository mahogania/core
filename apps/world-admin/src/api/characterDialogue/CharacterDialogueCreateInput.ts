import { CharacterCreateNestedManyWithoutCharacterDialoguesInput } from "./CharacterCreateNestedManyWithoutCharacterDialoguesInput";
import { ParagraphCreateNestedManyWithoutCharacterDialoguesInput } from "./ParagraphCreateNestedManyWithoutCharacterDialoguesInput";

export type CharacterDialogueCreateInput = {
  characters?: CharacterCreateNestedManyWithoutCharacterDialoguesInput;
  paragraphs?: ParagraphCreateNestedManyWithoutCharacterDialoguesInput;
};
