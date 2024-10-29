import { CharacterListRelationFilter } from "../character/CharacterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CharacterSpellWhereInput = {
  characters?: CharacterListRelationFilter;
  id?: StringFilter;
};
