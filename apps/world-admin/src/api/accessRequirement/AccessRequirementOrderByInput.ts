import { SortOrder } from "../../util/SortOrder";

export type AccessRequirementOrderByInput = {
  comment?: SortOrder;
  completedAchievement?: SortOrder;
  createdAt?: SortOrder;
  difficulty?: SortOrder;
  failureText?: SortOrder;
  id?: SortOrder;
  item?: SortOrder;
  levelMax?: SortOrder;
  levelMin?: SortOrder;
  mapId?: SortOrder;
  questDone?: SortOrder;
  updatedAt?: SortOrder;
};
