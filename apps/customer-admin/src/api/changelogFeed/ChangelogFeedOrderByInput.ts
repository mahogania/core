import { SortOrder } from "../../util/SortOrder";

export type ChangelogFeedOrderByInput = {
  appName?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  link?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  postingTimestamp?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
