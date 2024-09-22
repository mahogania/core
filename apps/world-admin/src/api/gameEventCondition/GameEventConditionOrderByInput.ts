import { SortOrder } from "../../util/SortOrder";

export type GameEventConditionOrderByInput = {
  conditionId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  doneWorldStateField?: SortOrder;
  eventEntry?: SortOrder;
  id?: SortOrder;
  maxWorldStateField?: SortOrder;
  reqNum?: SortOrder;
  updatedAt?: SortOrder;
};
