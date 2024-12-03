import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailDomainWhereInput = {
  appendEmailsToSentFolder?: BooleanNullableFilter;
  attachmentLimit?: IntNullableFilter;
  creation?: DateTimeNullableFilter;
  docstatus?: IntNullableFilter;
  domainName?: StringNullableFilter;
  emailServer?: StringNullableFilter;
  id?: StringFilter;
  idx?: IntNullableFilter;
  incomingPort?: StringNullableFilter;
  modified?: DateTimeNullableFilter;
  modifiedBy?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  smtpPort?: StringNullableFilter;
  smtpServer?: StringNullableFilter;
  useImap?: BooleanNullableFilter;
  useSsl?: BooleanNullableFilter;
  useSslForOutgoing?: BooleanNullableFilter;
  useStarttls?: BooleanNullableFilter;
  useTls?: BooleanNullableFilter;
};
