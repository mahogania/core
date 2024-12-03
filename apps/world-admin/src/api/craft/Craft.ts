import { CraftLevelStat } from "../craftLevelStat/CraftLevelStat";
import { PlayerCraft } from "../playerCraft/PlayerCraft";

export type Craft = {
  craftLevelStats?: Array<CraftLevelStat>;
  createdAt: Date;
  id: string;
  playerCrafts?: Array<PlayerCraft>;
  updatedAt: Date;
};
