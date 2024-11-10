import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  processorId?: SortOrder;
  traitId?: SortOrder;
  updatedAt?: SortOrder;
};
