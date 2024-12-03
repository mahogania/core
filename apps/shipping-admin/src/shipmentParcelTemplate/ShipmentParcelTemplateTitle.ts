import { ShipmentParcelTemplate as TShipmentParcelTemplate } from "../api/shipmentParcelTemplate/ShipmentParcelTemplate";

export const SHIPMENTPARCELTEMPLATE_TITLE_FIELD = "name";

export const ShipmentParcelTemplateTitle = (
  record: TShipmentParcelTemplate
): string => {
  return record.name?.toString() || String(record.id);
};
