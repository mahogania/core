import { GraveyardZone as TGraveyardZone } from "../api/graveyardZone/GraveyardZone";

export const GRAVEYARDZONE_TITLE_FIELD = "id";

export const GraveyardZoneTitle = (record: TGraveyardZone): string => {
  return record.id?.toString() || String(record.id);
};
