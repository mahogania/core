import { Map as TMap } from "../api/map/Map";

export const MAP_TITLE_FIELD = "name";

export const MapTitle = (record: TMap): string => {
  return record.name?.toString() || String(record.id);
};
