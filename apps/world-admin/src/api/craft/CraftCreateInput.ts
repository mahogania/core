import { CraftLevelStatCreateNestedManyWithoutCraftsInput } from "./CraftLevelStatCreateNestedManyWithoutCraftsInput";
import { PlayerCraftCreateNestedManyWithoutCraftsInput } from "./PlayerCraftCreateNestedManyWithoutCraftsInput";

export type CraftCreateInput = {
  craftLevelStats?: CraftLevelStatCreateNestedManyWithoutCraftsInput;
  playerCrafts?: PlayerCraftCreateNestedManyWithoutCraftsInput;
};
