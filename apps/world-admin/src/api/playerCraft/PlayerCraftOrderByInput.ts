import { SortOrder } from "../../util/SortOrder";

export type PlayerCraftOrderByInput = {
  craftId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  playerId?: SortOrder;
  updatedAt?: SortOrder;
};
