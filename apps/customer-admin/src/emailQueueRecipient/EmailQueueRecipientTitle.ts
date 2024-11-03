import { EmailQueueRecipient as TEmailQueueRecipient } from "../api/emailQueueRecipient/EmailQueueRecipient";

export const EMAILQUEUERECIPIENT_TITLE_FIELD = "name";

export const EmailQueueRecipientTitle = (
  record: TEmailQueueRecipient
): string => {
  return record.name?.toString() || String(record.id);
};
