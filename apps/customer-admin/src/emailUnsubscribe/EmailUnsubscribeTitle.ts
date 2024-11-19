import { EmailUnsubscribe as TEmailUnsubscribe } from "../api/emailUnsubscribe/EmailUnsubscribe";

export const EMAILUNSUBSCRIBE_TITLE_FIELD = "name";

export const EmailUnsubscribeTitle = (record: TEmailUnsubscribe): string => {
  return record.name?.toString() || String(record.id);
};
