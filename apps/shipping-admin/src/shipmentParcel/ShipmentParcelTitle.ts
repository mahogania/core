import { ShipmentParcel as TShipmentParcel } from "../api/shipmentParcel/ShipmentParcel";

export const SHIPMENTPARCEL_TITLE_FIELD = "name";

export const ShipmentParcelTitle = (record: TShipmentParcel): string => {
  return record.name?.toString() || String(record.id);
};
