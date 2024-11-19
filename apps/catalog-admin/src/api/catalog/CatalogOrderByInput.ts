import { SortOrder } from "../../util/SortOrder";

export type CatalogOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  unitId?: SortOrder;
  updatedAt?: SortOrder;
};
