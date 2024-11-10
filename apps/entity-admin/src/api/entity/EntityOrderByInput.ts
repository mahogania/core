import { SortOrder } from "../../util/SortOrder";

export type EntityOrderByInput = {
  agentId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  representationId?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
  version?: SortOrder;
};
