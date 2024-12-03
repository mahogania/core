import { Character } from "../character/Character";
import { Paragraph } from "../paragraph/Paragraph";

export type CharacterDialogue = {
  characters?: Array<Character>;
  createdAt: Date;
  id: string;
  paragraphs?: Array<Paragraph>;
  updatedAt: Date;
};
