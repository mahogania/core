import { PointsOfInterest as TPointsOfInterest } from "../api/pointsOfInterest/PointsOfInterest";

export const POINTSOFINTEREST_TITLE_FIELD = "id";

export const PointsOfInterestTitle = (record: TPointsOfInterest): string => {
  return record.id?.toString() || String(record.id);
};
