import { CharacterDialogue } from "../characterDialogue/CharacterDialogue";
import { ParagraphLocale } from "../paragraphLocale/ParagraphLocale";

export type Paragraph = {
  characterLines?: Array<CharacterDialogue>;
  createdAt: Date;
  id: string;
  paragraphLocales?: ParagraphLocale | null;
  updatedAt: Date;
};
