import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GameEventListRelationFilter } from "../gameEvent/GameEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventGameObjectWhereInput = {
  eventEntry?: IntNullableFilter;
  gameEvents?: GameEventListRelationFilter;
  guid?: IntNullableFilter;
  id?: StringFilter;
};
