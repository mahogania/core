import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  updatedAt?: SortOrder;
};
