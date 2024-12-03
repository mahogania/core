import { StringFilter } from "../../util/StringFilter";
import { GameEventListRelationFilter } from "../gameEvent/GameEventListRelationFilter";

export type GameEventQuestWhereInput = {
  description?: StringFilter;
  gameEvents?: GameEventListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
