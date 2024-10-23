import { SortOrder } from "../../util/SortOrder";

export type EntityOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
