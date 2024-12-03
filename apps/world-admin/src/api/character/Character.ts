import { CharacterDialogue } from "../characterDialogue/CharacterDialogue";
import { CharacterSpell } from "../characterSpell/CharacterSpell";

export type Character = {
  characterDialogues?: Array<CharacterDialogue>;
  characterSpells?: CharacterSpell | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
