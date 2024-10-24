import { SortOrder } from "../../util/SortOrder";

export type DealOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  unitId?: SortOrder;
  updatedAt?: SortOrder;
};
