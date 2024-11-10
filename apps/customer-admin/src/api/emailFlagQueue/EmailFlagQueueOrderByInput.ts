import { SortOrder } from "../../util/SortOrder";

export type EmailFlagQueueOrderByInput = {
  action?: SortOrder;
  communication?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  emailAccount?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  isCompleted?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  uid?: SortOrder;
  updatedAt?: SortOrder;
};
