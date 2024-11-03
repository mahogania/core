import { SortOrder } from "../../util/SortOrder";

export type EmailTemplateOrderByInput = {
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  response?: SortOrder;
  responseHtml?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
  useHtml?: SortOrder;
};
