import { CustomerGroup as TCustomerGroup } from "../api/customerGroup/CustomerGroup";

export const CUSTOMERGROUP_TITLE_FIELD = "customerGroupName";

export const CustomerGroupTitle = (record: TCustomerGroup): string => {
  return record.customerGroupName?.toString() || String(record.id);
};
