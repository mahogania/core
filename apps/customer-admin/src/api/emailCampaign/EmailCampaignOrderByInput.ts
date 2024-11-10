import { SortOrder } from "../../util/SortOrder";

export type EmailCampaignOrderByInput = {
  campaignName?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  emailCampaignFor?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  recipient?: SortOrder;
  sender?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
