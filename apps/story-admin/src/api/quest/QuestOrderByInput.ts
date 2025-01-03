import { SortOrder } from "../../util/SortOrder";

export type QuestOrderByInput = {
  createdAt?: SortOrder;
  epicId?: SortOrder;
  id?: SortOrder;
  questCueEffectsId?: SortOrder;
  questDetailsId?: SortOrder;
  questGreetingId?: SortOrder;
  questTemplateId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
