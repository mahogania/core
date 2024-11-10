import { DeliveryTrip as TDeliveryTrip } from "../api/deliveryTrip/DeliveryTrip";

export const DELIVERYTRIP_TITLE_FIELD = "driverName";

export const DeliveryTripTitle = (record: TDeliveryTrip): string => {
  return record.driverName?.toString() || String(record.id);
};
