import { Map as TMap } from "../api/map/Map";

export const MAP_TITLE_FIELD = "id";

export const MapTitle = (record: TMap): string => {
  return record.id?.toString() || String(record.id);
};
