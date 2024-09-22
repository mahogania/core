import { SortOrder } from "../../util/SortOrder";

export type GameEventPoolOrderByInput = {
  createdAt?: SortOrder;
  eventEntry?: SortOrder;
  id?: SortOrder;
  poolEntry?: SortOrder;
  updatedAt?: SortOrder;
};
