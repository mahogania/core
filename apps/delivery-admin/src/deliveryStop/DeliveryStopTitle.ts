import { DeliveryStop as TDeliveryStop } from "../api/deliveryStop/DeliveryStop";

export const DELIVERYSTOP_TITLE_FIELD = "name";

export const DeliveryStopTitle = (record: TDeliveryStop): string => {
  return record.name?.toString() || String(record.id);
};
