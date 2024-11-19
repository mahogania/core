import { SortOrder } from "../../util/SortOrder";

export type ProcessOrderByInput = {
  PipelineId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
