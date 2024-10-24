import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  proposalId?: SortOrder;
  updatedAt?: SortOrder;
};
