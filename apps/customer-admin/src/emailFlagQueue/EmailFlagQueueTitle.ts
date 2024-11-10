import { EmailFlagQueue as TEmailFlagQueue } from "../api/emailFlagQueue/EmailFlagQueue";

export const EMAILFLAGQUEUE_TITLE_FIELD = "name";

export const EmailFlagQueueTitle = (record: TEmailFlagQueue): string => {
  return record.name?.toString() || String(record.id);
};
