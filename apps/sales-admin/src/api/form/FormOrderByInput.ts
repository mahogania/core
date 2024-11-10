import { SortOrder } from "../../util/SortOrder";

export type FormOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  processId?: SortOrder;
  schema?: SortOrder;
  updatedAt?: SortOrder;
};
