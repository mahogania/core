import { SortOrder } from "../../util/SortOrder";

export type AchievementOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  flags?: SortOrder;
  id?: SortOrder;
  map?: SortOrder;
  points?: SortOrder;
  refAchievement?: SortOrder;
  requiredFaction?: SortOrder;
  updatedAt?: SortOrder;
};
