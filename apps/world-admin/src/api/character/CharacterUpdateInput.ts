import { CharacterDialogueUpdateManyWithoutCharactersInput } from "./CharacterDialogueUpdateManyWithoutCharactersInput";
import { CharacterSpellWhereUniqueInput } from "../characterSpell/CharacterSpellWhereUniqueInput";

export type CharacterUpdateInput = {
  characterDialogues?: CharacterDialogueUpdateManyWithoutCharactersInput;
  characterSpells?: CharacterSpellWhereUniqueInput | null;
};
