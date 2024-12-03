import { ShipmentDeliveryNote as TShipmentDeliveryNote } from "../api/shipmentDeliveryNote/ShipmentDeliveryNote";

export const SHIPMENTDELIVERYNOTE_TITLE_FIELD = "name";

export const ShipmentDeliveryNoteTitle = (
  record: TShipmentDeliveryNote
): string => {
  return record.name?.toString() || String(record.id);
};
