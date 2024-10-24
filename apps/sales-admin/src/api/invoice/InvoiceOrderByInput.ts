import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  dealId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
