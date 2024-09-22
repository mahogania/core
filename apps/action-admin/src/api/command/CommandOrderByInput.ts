import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  createdAt?: SortOrder;
  help?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
