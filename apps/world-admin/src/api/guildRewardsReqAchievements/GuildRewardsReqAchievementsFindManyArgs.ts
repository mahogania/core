import { GuildRewardsReqAchievementsWhereInput } from "./GuildRewardsReqAchievementsWhereInput";
import { GuildRewardsReqAchievementsOrderByInput } from "./GuildRewardsReqAchievementsOrderByInput";

export type GuildRewardsReqAchievementsFindManyArgs = {
  where?: GuildRewardsReqAchievementsWhereInput;
  orderBy?: Array<GuildRewardsReqAchievementsOrderByInput>;
  skip?: number;
  take?: number;
};
