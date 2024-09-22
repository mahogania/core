import { SortOrder } from "../../util/SortOrder";

export type GameEventCreatureOrderByInput = {
  createdAt?: SortOrder;
  eventEntry?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
