import { DeliveryNoteItem as TDeliveryNoteItem } from "../api/deliveryNoteItem/DeliveryNoteItem";

export const DELIVERYNOTEITEM_TITLE_FIELD = "itemName";

export const DeliveryNoteItemTitle = (record: TDeliveryNoteItem): string => {
  return record.itemName?.toString() || String(record.id);
};
