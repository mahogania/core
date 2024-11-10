import { EmailDigest as TEmailDigest } from "../api/emailDigest/EmailDigest";

export const EMAILDIGEST_TITLE_FIELD = "name";

export const EmailDigestTitle = (record: TEmailDigest): string => {
  return record.name?.toString() || String(record.id);
};
