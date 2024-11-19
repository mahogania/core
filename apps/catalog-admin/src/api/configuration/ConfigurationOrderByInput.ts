import { SortOrder } from "../../util/SortOrder";

export type ConfigurationOrderByInput = {
  bundleId?: SortOrder;
  catalogId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pipelineId?: SortOrder;
  updatedAt?: SortOrder;
};
