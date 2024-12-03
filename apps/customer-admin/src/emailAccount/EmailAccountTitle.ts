import { EmailAccount as TEmailAccount } from "../api/emailAccount/EmailAccount";

export const EMAILACCOUNT_TITLE_FIELD = "alwaysUseAccountNameAsSenderName";

export const EmailAccountTitle = (record: TEmailAccount): string => {
  return (
    record.alwaysUseAccountNameAsSenderName?.toString() || String(record.id)
  );
};
