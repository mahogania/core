import { ModeOfPaymentAccount as TModeOfPaymentAccount } from "../api/modeOfPaymentAccount/ModeOfPaymentAccount";

export const MODEOFPAYMENTACCOUNT_TITLE_FIELD = "name";

export const ModeOfPaymentAccountTitle = (
  record: TModeOfPaymentAccount
): string => {
  return record.name?.toString() || String(record.id);
};
