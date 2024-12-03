import { SortOrder } from "../../util/SortOrder";

export type EmailDomainOrderByInput = {
  appendEmailsToSentFolder?: SortOrder;
  attachmentLimit?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  docstatus?: SortOrder;
  domainName?: SortOrder;
  emailServer?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  incomingPort?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  smtpPort?: SortOrder;
  smtpServer?: SortOrder;
  updatedAt?: SortOrder;
  useImap?: SortOrder;
  useSsl?: SortOrder;
  useSslForOutgoing?: SortOrder;
  useStarttls?: SortOrder;
  useTls?: SortOrder;
};
