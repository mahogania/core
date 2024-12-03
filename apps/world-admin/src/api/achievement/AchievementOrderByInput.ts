import { SortOrder } from "../../util/SortOrder";

export type AchievementOrderByInput = {
  achievementRewardsId?: SortOrder;
  count?: SortOrder;
  createdAt?: SortOrder;
  flags?: SortOrder;
  id?: SortOrder;
  map?: SortOrder;
  playerId?: SortOrder;
  points?: SortOrder;
  refAchievement?: SortOrder;
  requiredFaction?: SortOrder;
  updatedAt?: SortOrder;
};
