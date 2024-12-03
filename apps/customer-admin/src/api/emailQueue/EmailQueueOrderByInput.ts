import { SortOrder } from "../../util/SortOrder";

export type EmailQueueOrderByInput = {
  addUnsubscribeLink?: SortOrder;
  attachments?: SortOrder;
  communication?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  emailAccount?: SortOrder;
  errorField?: SortOrder;
  exposeRecipients?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  message?: SortOrder;
  messageId?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  priority?: SortOrder;
  referenceDoctype?: SortOrder;
  referenceName?: SortOrder;
  retry?: SortOrder;
  sendAfter?: SortOrder;
  sender?: SortOrder;
  showAsCc?: SortOrder;
  status?: SortOrder;
  unsubscribeMethod?: SortOrder;
  unsubscribeParam?: SortOrder;
  updatedAt?: SortOrder;
};
