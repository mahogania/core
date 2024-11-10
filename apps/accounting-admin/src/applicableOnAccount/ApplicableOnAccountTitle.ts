import { ApplicableOnAccount as TApplicableOnAccount } from "../api/applicableOnAccount/ApplicableOnAccount";

export const APPLICABLEONACCOUNT_TITLE_FIELD = "name";

export const ApplicableOnAccountTitle = (
  record: TApplicableOnAccount
): string => {
  return record.name?.toString() || String(record.id);
};
