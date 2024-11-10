import { SortOrder } from "../../util/SortOrder";

export type DiscussionTopicOrderByInput = {
  createdAt?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  referenceDocname?: SortOrder;
  referenceDoctype?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
