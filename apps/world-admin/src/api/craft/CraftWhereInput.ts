import { CraftLevelStatListRelationFilter } from "../craftLevelStat/CraftLevelStatListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerCraftListRelationFilter } from "../playerCraft/PlayerCraftListRelationFilter";

export type CraftWhereInput = {
  craftLevelStats?: CraftLevelStatListRelationFilter;
  id?: StringFilter;
  playerCrafts?: PlayerCraftListRelationFilter;
};
