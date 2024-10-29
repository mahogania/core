import { SortOrder } from "../../util/SortOrder";

export type GameEventOrderByInput = {
  announce?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  gameEventConditionsId?: SortOrder;
  gameEventCreaturesId?: SortOrder;
  gameEventGameObjectsId?: SortOrder;
  gameEventModelEquipsId?: SortOrder;
  gameEventQuestsId?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
