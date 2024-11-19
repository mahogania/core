import { CustomerGroupItem as TCustomerGroupItem } from "../api/customerGroupItem/CustomerGroupItem";

export const CUSTOMERGROUPITEM_TITLE_FIELD = "name";

export const CustomerGroupItemTitle = (record: TCustomerGroupItem): string => {
  return record.name?.toString() || String(record.id);
};
