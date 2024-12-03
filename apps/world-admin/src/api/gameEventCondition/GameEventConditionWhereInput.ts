import { StringFilter } from "../../util/StringFilter";
import { GameEventListRelationFilter } from "../gameEvent/GameEventListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GameEventConditionWhereInput = {
  description?: StringFilter;
  gameEvents?: GameEventListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
