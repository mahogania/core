import { AchievementBehaviourCreateNestedManyWithoutAchievementsInput } from "./AchievementBehaviourCreateNestedManyWithoutAchievementsInput";
import { AchievementRewardWhereUniqueInput } from "../achievementReward/AchievementRewardWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AchievementCreateInput = {
  achievementBehaviours?: AchievementBehaviourCreateNestedManyWithoutAchievementsInput;
  achievementRewards: AchievementRewardWhereUniqueInput;
  count?: number | null;
  flags?: number | null;
  map?: number | null;
  player?: PlayerWhereUniqueInput | null;
  points?: number | null;
  refAchievement?: number | null;
  requiredFaction?: number | null;
};
