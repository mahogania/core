import { EmailQueue as TEmailQueue } from "../api/emailQueue/EmailQueue";

export const EMAILQUEUE_TITLE_FIELD = "name";

export const EmailQueueTitle = (record: TEmailQueue): string => {
  return record.name?.toString() || String(record.id);
};
