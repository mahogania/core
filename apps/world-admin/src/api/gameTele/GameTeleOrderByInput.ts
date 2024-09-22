import { SortOrder } from "../../util/SortOrder";

export type GameTeleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  map?: SortOrder;
  name?: SortOrder;
  orientation?: SortOrder;
  positionX?: SortOrder;
  positionY?: SortOrder;
  positionZ?: SortOrder;
  updatedAt?: SortOrder;
};
