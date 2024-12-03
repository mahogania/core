import { PointOfInterest as TPointOfInterest } from "../api/pointOfInterest/PointOfInterest";

export const POINTOFINTEREST_TITLE_FIELD = "name";

export const PointOfInterestTitle = (record: TPointOfInterest): string => {
  return record.name?.toString() || String(record.id);
};
