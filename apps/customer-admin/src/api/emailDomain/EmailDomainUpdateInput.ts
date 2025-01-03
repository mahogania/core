export type EmailDomainUpdateInput = {
  appendEmailsToSentFolder?: boolean | null;
  attachmentLimit?: number | null;
  creation?: Date | null;
  docstatus?: number | null;
  domainName?: string | null;
  emailServer?: string | null;
  idx?: number | null;
  incomingPort?: string | null;
  modified?: Date | null;
  modifiedBy?: string | null;
  name?: string | null;
  owner?: string | null;
  smtpPort?: string | null;
  smtpServer?: string | null;
  useImap?: boolean | null;
  useSsl?: boolean | null;
  useSslForOutgoing?: boolean | null;
  useStarttls?: boolean | null;
  useTls?: boolean | null;
};
