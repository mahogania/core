import { CustomerItem as TCustomerItem } from "../api/customerItem/CustomerItem";

export const CUSTOMERITEM_TITLE_FIELD = "name";

export const CustomerItemTitle = (record: TCustomerItem): string => {
  return record.name?.toString() || String(record.id);
};
