import { CharacterListRelationFilter } from "../character/CharacterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParagraphListRelationFilter } from "../paragraph/ParagraphListRelationFilter";

export type CharacterDialogueWhereInput = {
  characters?: CharacterListRelationFilter;
  id?: StringFilter;
  paragraphs?: ParagraphListRelationFilter;
};
