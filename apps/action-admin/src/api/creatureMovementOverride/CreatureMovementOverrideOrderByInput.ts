import { SortOrder } from "../../util/SortOrder";

export type CreatureMovementOverrideOrderByInput = {
  chase?: SortOrder;
  createdAt?: SortOrder;
  flight?: SortOrder;
  ground?: SortOrder;
  id?: SortOrder;
  interactionPauseTimer?: SortOrder;
  random?: SortOrder;
  rooted?: SortOrder;
  spawnId?: SortOrder;
  swim?: SortOrder;
  updatedAt?: SortOrder;
};
