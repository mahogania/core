import { CharacterDialogueListRelationFilter } from "../characterDialogue/CharacterDialogueListRelationFilter";
import { CharacterSpellWhereUniqueInput } from "../characterSpell/CharacterSpellWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CharacterWhereInput = {
  characterDialogues?: CharacterDialogueListRelationFilter;
  characterSpells?: CharacterSpellWhereUniqueInput;
  id?: StringFilter;
};
