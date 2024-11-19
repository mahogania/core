import { SortOrder } from "../../util/SortOrder";

export type CampaignEmailScheduleOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  emailTemplate?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  owner?: SortOrder;
  parent?: SortOrder;
  parentfield?: SortOrder;
  parenttype?: SortOrder;
  sendAfterDays?: SortOrder;
  updatedAt?: SortOrder;
};
