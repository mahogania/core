import { SortOrder } from "../../util/SortOrder";

export type PlayerFactionAchievementOrderByInput = {
  createdAt?: SortOrder;
  factionId?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  updatedAt?: SortOrder;
};
