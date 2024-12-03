import { PointsOfInterestLocale as TPointsOfInterestLocale } from "../api/pointsOfInterestLocale/PointsOfInterestLocale";

export const POINTSOFINTERESTLOCALE_TITLE_FIELD = "id";

export const PointsOfInterestLocaleTitle = (
  record: TPointsOfInterestLocale
): string => {
  return record.id?.toString() || String(record.id);
};
