import { Area as TArea } from "../api/area/Area";

export const AREA_TITLE_FIELD = "id";

export const AreaTitle = (record: TArea): string => {
  return record.id?.toString() || String(record.id);
};
