import { EmailDomain as TEmailDomain } from "../api/emailDomain/EmailDomain";

export const EMAILDOMAIN_TITLE_FIELD = "domainName";

export const EmailDomainTitle = (record: TEmailDomain): string => {
  return record.domainName?.toString() || String(record.id);
};
