import { SortOrder } from "../../util/SortOrder";

export type ActivityLogOrderByInput = {
  communicationDate?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  ipAddress?: SortOrder;
  linkDoctype?: SortOrder;
  linkName?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  operation?: SortOrder;
  owner?: SortOrder;
  referenceDoctype?: SortOrder;
  referenceName?: SortOrder;
  referenceOwner?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  timelineDoctype?: SortOrder;
  timelineName?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
