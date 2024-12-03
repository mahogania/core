import { GameEventListRelationFilter } from "../gameEvent/GameEventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameEventCreatureWhereInput = {
  gameEvents?: GameEventListRelationFilter;
  id?: StringFilter;
  spawnerId?: StringFilter;
};
