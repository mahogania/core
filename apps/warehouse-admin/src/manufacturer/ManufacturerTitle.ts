import { Manufacturer as TManufacturer } from "../api/manufacturer/Manufacturer";

export const MANUFACTURER_TITLE_FIELD = "id";

export const ManufacturerTitle = (record: TManufacturer): string => {
  return record.id?.toString() || String(record.id);
};
