import { AchievementBehaviourUpdateManyWithoutAchievementsInput } from "./AchievementBehaviourUpdateManyWithoutAchievementsInput";
import { AchievementRewardWhereUniqueInput } from "../achievementReward/AchievementRewardWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AchievementUpdateInput = {
  achievementBehaviours?: AchievementBehaviourUpdateManyWithoutAchievementsInput;
  achievementRewards?: AchievementRewardWhereUniqueInput;
  count?: number | null;
  flags?: number | null;
  map?: number | null;
  player?: PlayerWhereUniqueInput | null;
  points?: number | null;
  refAchievement?: number | null;
  requiredFaction?: number | null;
};
