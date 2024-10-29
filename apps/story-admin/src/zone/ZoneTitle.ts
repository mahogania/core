import { Zone as TZone } from "../api/zone/Zone";

export const ZONE_TITLE_FIELD = "id";

export const ZoneTitle = (record: TZone): string => {
  return record.id?.toString() || String(record.id);
};
