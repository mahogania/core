import { SortOrder } from "../../util/SortOrder";

export type FactionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  playerFactionAchievementsId?: SortOrder;
  updatedAt?: SortOrder;
};
