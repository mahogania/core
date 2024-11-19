import { SortOrder } from "../../util/SortOrder";

export type DiscussionReplyOrderByInput = {
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  reply?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
