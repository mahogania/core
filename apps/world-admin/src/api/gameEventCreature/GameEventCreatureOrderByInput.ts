import { SortOrder } from "../../util/SortOrder";

export type GameEventCreatureOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  spawnerId?: SortOrder;
  updatedAt?: SortOrder;
};
