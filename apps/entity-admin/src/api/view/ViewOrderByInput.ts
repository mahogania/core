import { SortOrder } from "../../util/SortOrder";

export type ViewOrderByInput = {
  createdAt?: SortOrder;
  fragmentId?: SortOrder;
  id?: SortOrder;
  processorId?: SortOrder;
  updatedAt?: SortOrder;
};
