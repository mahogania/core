import { DeliveryNote as TDeliveryNote } from "../api/deliveryNote/DeliveryNote";

export const DELIVERYNOTE_TITLE_FIELD = "customerName";

export const DeliveryNoteTitle = (record: TDeliveryNote): string => {
  return record.customerName?.toString() || String(record.id);
};
