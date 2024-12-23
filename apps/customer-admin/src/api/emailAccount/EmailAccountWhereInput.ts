import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailAccountWhereInput = {
  addSignature?: BooleanNullableFilter;
  alwaysUseAccountEmailIdAsSender?: BooleanNullableFilter;
  alwaysUseAccountNameAsSenderName?: BooleanNullableFilter;
  appendEmailsToSentFolder?: BooleanNullableFilter;
  appendTo?: StringNullableFilter;
  asciiEncodePassword?: BooleanNullableFilter;
  attachmentLimit?: IntNullableFilter;
  authMethod?: StringNullableFilter;
  autoReplyMessage?: StringNullableFilter;
  awaitingPassword?: BooleanNullableFilter;
  brandLogo?: StringNullableFilter;
  connectedApp?: StringNullableFilter;
  connectedUser?: StringNullableFilter;
  createContact?: BooleanNullableFilter;
  creation?: DateTimeNullableFilter;
  defaultIncoming?: BooleanNullableFilter;
  defaultOutgoing?: BooleanNullableFilter;
  docstatus?: IntNullableFilter;
  domain?: StringNullableFilter;
  emailAccountName?: StringNullableFilter;
  emailId?: StringNullableFilter;
  emailServer?: StringNullableFilter;
  emailSyncOption?: StringNullableFilter;
  enableAutoReply?: BooleanNullableFilter;
  enableAutomaticLinking?: BooleanNullableFilter;
  enableIncoming?: BooleanNullableFilter;
  enableOutgoing?: BooleanNullableFilter;
  footer?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  incomingPort?: StringNullableFilter;
  initialSyncCount?: StringNullableFilter;
  loginId?: StringNullableFilter;
  loginIdIsDifferent?: BooleanNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  noFailed?: IntNullableFilter;
  noSmtpAuthentication?: BooleanNullableFilter;
  notifyIfUnreplied?: BooleanNullableFilter;
  owner?: StringNullableFilter;
  password?: StringNullableFilter;
  sendNotificationTo?: StringNullableFilter;
  sendUnsubscribeMessage?: BooleanNullableFilter;
  service?: StringNullableFilter;
  signature?: StringNullableFilter;
  smtpPort?: StringNullableFilter;
  smtpServer?: StringNullableFilter;
  trackEmailStatus?: BooleanNullableFilter;
  uidnext?: IntNullableFilter;
  uidvalidity?: StringNullableFilter;
  unrepliedForMins?: IntNullableFilter;
  useImap?: BooleanNullableFilter;
  useSsl?: BooleanNullableFilter;
  useSslForOutgoing?: BooleanNullableFilter;
  useStarttls?: BooleanNullableFilter;
  useTls?: BooleanNullableFilter;
};
