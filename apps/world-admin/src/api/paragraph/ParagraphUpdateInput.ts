import { CharacterDialogueUpdateManyWithoutParagraphsInput } from "./CharacterDialogueUpdateManyWithoutParagraphsInput";
import { ParagraphLocaleWhereUniqueInput } from "../paragraphLocale/ParagraphLocaleWhereUniqueInput";

export type ParagraphUpdateInput = {
  characterLines?: CharacterDialogueUpdateManyWithoutParagraphsInput;
  paragraphLocales?: ParagraphLocaleWhereUniqueInput | null;
};
