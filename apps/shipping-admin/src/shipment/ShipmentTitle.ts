import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "deliveryAddressName";

export const ShipmentTitle = (record: TShipment): string => {
  return record.deliveryAddressName?.toString() || String(record.id);
};
