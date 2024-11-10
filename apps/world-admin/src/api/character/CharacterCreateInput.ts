import { CharacterDialogueCreateNestedManyWithoutCharactersInput } from "./CharacterDialogueCreateNestedManyWithoutCharactersInput";
import { CharacterSpellWhereUniqueInput } from "../characterSpell/CharacterSpellWhereUniqueInput";

export type CharacterCreateInput = {
  characterDialogues?: CharacterDialogueCreateNestedManyWithoutCharactersInput;
  characterSpells?: CharacterSpellWhereUniqueInput | null;
};
