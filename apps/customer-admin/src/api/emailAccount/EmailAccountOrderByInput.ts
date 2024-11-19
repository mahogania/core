import { SortOrder } from "../../util/SortOrder";

export type EmailAccountOrderByInput = {
  addSignature?: SortOrder;
  alwaysUseAccountEmailIdAsSender?: SortOrder;
  alwaysUseAccountNameAsSenderName?: SortOrder;
  appendEmailsToSentFolder?: SortOrder;
  appendTo?: SortOrder;
  asciiEncodePassword?: SortOrder;
  attachmentLimit?: SortOrder;
  authMethod?: SortOrder;
  autoReplyMessage?: SortOrder;
  awaitingPassword?: SortOrder;
  brandLogo?: SortOrder;
  connectedApp?: SortOrder;
  connectedUser?: SortOrder;
  createContact?: SortOrder;
  createdAt?: SortOrder;
  creation?: SortOrder;
  defaultIncoming?: SortOrder;
  defaultOutgoing?: SortOrder;
  docstatus?: SortOrder;
  domain?: SortOrder;
  emailAccountName?: SortOrder;
  emailId?: SortOrder;
  emailServer?: SortOrder;
  emailSyncOption?: SortOrder;
  enableAutoReply?: SortOrder;
  enableAutomaticLinking?: SortOrder;
  enableIncoming?: SortOrder;
  enableOutgoing?: SortOrder;
  footer?: SortOrder;
  id?: SortOrder;
  idx?: SortOrder;
  incomingPort?: SortOrder;
  initialSyncCount?: SortOrder;
  loginId?: SortOrder;
  loginIdIsDifferent?: SortOrder;
  modified?: SortOrder;
  modifiedBy?: SortOrder;
  name?: SortOrder;
  noFailed?: SortOrder;
  noSmtpAuthentication?: SortOrder;
  notifyIfUnreplied?: SortOrder;
  owner?: SortOrder;
  password?: SortOrder;
  sendNotificationTo?: SortOrder;
  sendUnsubscribeMessage?: SortOrder;
  service?: SortOrder;
  signature?: SortOrder;
  smtpPort?: SortOrder;
  smtpServer?: SortOrder;
  trackEmailStatus?: SortOrder;
  uidnext?: SortOrder;
  uidvalidity?: SortOrder;
  unrepliedForMins?: SortOrder;
  updatedAt?: SortOrder;
  useImap?: SortOrder;
  useSsl?: SortOrder;
  useSslForOutgoing?: SortOrder;
  useStarttls?: SortOrder;
  useTls?: SortOrder;
};