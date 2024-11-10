import { AchievementBehaviourListRelationFilter } from "../achievementBehaviour/AchievementBehaviourListRelationFilter";
import { AchievementRewardWhereUniqueInput } from "../achievementReward/AchievementRewardWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AchievementWhereInput = {
  achievementBehaviours?: AchievementBehaviourListRelationFilter;
  achievementRewards?: AchievementRewardWhereUniqueInput;
  count?: IntNullableFilter;
  flags?: IntNullableFilter;
  id?: StringFilter;
  map?: IntNullableFilter;
  player?: PlayerWhereUniqueInput;
  points?: IntNullableFilter;
  refAchievement?: IntNullableFilter;
  requiredFaction?: IntNullableFilter;
};
