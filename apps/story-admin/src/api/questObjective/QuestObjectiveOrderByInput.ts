import { SortOrder } from "../../util/SortOrder";

export type QuestObjectiveOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  questObjectiveCompletionEffectsId?: SortOrder;
  questObjectiveLocalesId?: SortOrder;
  questPoisId?: SortOrder;
  updatedAt?: SortOrder;
};
