import { GuildRewardsWhereInput } from "./GuildRewardsWhereInput";
import { GuildRewardsOrderByInput } from "./GuildRewardsOrderByInput";

export type GuildRewardsFindManyArgs = {
  where?: GuildRewardsWhereInput;
  orderBy?: Array<GuildRewardsOrderByInput>;
  skip?: number;
  take?: number;
};
