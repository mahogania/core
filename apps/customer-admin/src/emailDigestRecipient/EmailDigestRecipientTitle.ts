import { EmailDigestRecipient as TEmailDigestRecipient } from "../api/emailDigestRecipient/EmailDigestRecipient";

export const EMAILDIGESTRECIPIENT_TITLE_FIELD = "name";

export const EmailDigestRecipientTitle = (
  record: TEmailDigestRecipient
): string => {
  return record.name?.toString() || String(record.id);
};
