import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commentBy?: SortOrder;
  commentEmail?: SortOrder;
  commentType?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  ipAddress?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  published?: SortOrder;
  referenceDoctype?: SortOrder;
  referenceName?: SortOrder;
  referenceOwner?: SortOrder;
  seen?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
