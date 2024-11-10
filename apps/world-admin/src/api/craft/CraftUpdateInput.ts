import { CraftLevelStatUpdateManyWithoutCraftsInput } from "./CraftLevelStatUpdateManyWithoutCraftsInput";
import { PlayerCraftUpdateManyWithoutCraftsInput } from "./PlayerCraftUpdateManyWithoutCraftsInput";

export type CraftUpdateInput = {
  craftLevelStats?: CraftLevelStatUpdateManyWithoutCraftsInput;
  playerCrafts?: PlayerCraftUpdateManyWithoutCraftsInput;
};
