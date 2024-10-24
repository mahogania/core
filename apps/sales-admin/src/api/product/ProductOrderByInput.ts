import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  predecessorProductPathsId?: SortOrder;
  successorProductPathsId?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
