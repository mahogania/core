import { ItemCustomerDetail as TItemCustomerDetail } from "../api/itemCustomerDetail/ItemCustomerDetail";

export const ITEMCUSTOMERDETAIL_TITLE_FIELD = "customerName";

export const ItemCustomerDetailTitle = (
  record: TItemCustomerDetail
): string => {
  return record.customerName?.toString() || String(record.id);
};
