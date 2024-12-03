import { CharacterDialogueCreateNestedManyWithoutParagraphsInput } from "./CharacterDialogueCreateNestedManyWithoutParagraphsInput";
import { ParagraphLocaleWhereUniqueInput } from "../paragraphLocale/ParagraphLocaleWhereUniqueInput";

export type ParagraphCreateInput = {
  characterLines?: CharacterDialogueCreateNestedManyWithoutParagraphsInput;
  paragraphLocales?: ParagraphLocaleWhereUniqueInput | null;
};
