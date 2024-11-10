import { LocationProfile as TLocationProfile } from "../api/locationProfile/LocationProfile";

export const LOCATIONPROFILE_TITLE_FIELD = "id";

export const LocationProfileTitle = (record: TLocationProfile): string => {
  return record.id?.toString() || String(record.id);
};
