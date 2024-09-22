import { SortOrder } from "../../util/SortOrder";

export type GameEventOrderByInput = {
  announce?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endTime?: SortOrder;
  eventEntry?: SortOrder;
  holiday?: SortOrder;
  holidayStage?: SortOrder;
  id?: SortOrder;
  length?: SortOrder;
  occurence?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  worldEvent?: SortOrder;
};
