import { CustomerCreditLimit as TCustomerCreditLimit } from "../api/customerCreditLimit/CustomerCreditLimit";

export const CUSTOMERCREDITLIMIT_TITLE_FIELD = "name";

export const CustomerCreditLimitTitle = (
  record: TCustomerCreditLimit
): string => {
  return record.name?.toString() || String(record.id);
};
