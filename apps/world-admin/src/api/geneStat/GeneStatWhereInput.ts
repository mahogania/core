import { StringFilter } from "../../util/StringFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";

export type GeneStatWhereInput = {
  id?: StringFilter;
  players?: PlayerListRelationFilter;
};
