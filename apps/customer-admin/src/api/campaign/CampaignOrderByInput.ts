import { SortOrder } from "../../util/SortOrder";

export type CampaignOrderByInput = {
  campaignName?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  description?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  namingSeries?: SortOrder;
  owner?: SortOrder;
  updatedAt?: SortOrder;
};
