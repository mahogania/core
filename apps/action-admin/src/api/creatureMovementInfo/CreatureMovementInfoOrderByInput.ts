import { SortOrder } from "../../util/SortOrder";

export type CreatureMovementInfoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  movementId?: SortOrder;
  runSpeed?: SortOrder;
  updatedAt?: SortOrder;
  walkSpeed?: SortOrder;
};
