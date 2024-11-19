import { CharacterDialogueListRelationFilter } from "../characterDialogue/CharacterDialogueListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParagraphLocaleWhereUniqueInput } from "../paragraphLocale/ParagraphLocaleWhereUniqueInput";

export type ParagraphWhereInput = {
  characterLines?: CharacterDialogueListRelationFilter;
  id?: StringFilter;
  paragraphLocales?: ParagraphLocaleWhereUniqueInput;
};
