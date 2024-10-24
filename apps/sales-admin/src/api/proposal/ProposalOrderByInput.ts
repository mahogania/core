import { SortOrder } from "../../util/SortOrder";

export type ProposalOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  opportunityId?: SortOrder;
  threatId?: SortOrder;
  updatedAt?: SortOrder;
};
