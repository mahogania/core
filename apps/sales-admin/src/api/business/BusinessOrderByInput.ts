import { SortOrder } from "../../util/SortOrder";

export type BusinessOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  industryId?: SortOrder;
  name?: SortOrder;
  succesorRelationsId?: SortOrder;
  updatedAt?: SortOrder;
};
