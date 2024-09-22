import { SortOrder } from "../../util/SortOrder";

export type GameEventPrerequisiteOrderByInput = {
  createdAt?: SortOrder;
  eventEntry?: SortOrder;
  id?: SortOrder;
  prerequisiteEvent?: SortOrder;
  updatedAt?: SortOrder;
};
