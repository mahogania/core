import { SortOrder } from "../../util/SortOrder";

export type PointOfInterestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
