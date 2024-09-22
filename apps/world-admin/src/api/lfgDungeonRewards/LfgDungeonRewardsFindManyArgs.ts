import { LfgDungeonRewardsWhereInput } from "./LfgDungeonRewardsWhereInput";
import { LfgDungeonRewardsOrderByInput } from "./LfgDungeonRewardsOrderByInput";

export type LfgDungeonRewardsFindManyArgs = {
  where?: LfgDungeonRewardsWhereInput;
  orderBy?: Array<LfgDungeonRewardsOrderByInput>;
  skip?: number;
  take?: number;
};
