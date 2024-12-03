import { StringFilter } from "../../util/StringFilter";
import { GameEventListRelationFilter } from "../gameEvent/GameEventListRelationFilter";

export type GameEventModelEquipWhereInput = {
  equipmentId?: StringFilter;
  gameEvents?: GameEventListRelationFilter;
  id?: StringFilter;
  modelid?: StringFilter;
};
