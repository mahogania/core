import { AchievementRewardWhereInput } from "./AchievementRewardWhereInput";
import { AchievementRewardOrderByInput } from "./AchievementRewardOrderByInput";

export type AchievementRewardFindManyArgs = {
  where?: AchievementRewardWhereInput;
  orderBy?: Array<AchievementRewardOrderByInput>;
  skip?: number;
  take?: number;
};
