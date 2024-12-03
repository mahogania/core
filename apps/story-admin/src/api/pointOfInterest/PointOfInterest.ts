import { PointsOfInterestLocale } from "../pointsOfInterestLocale/PointsOfInterestLocale";
import { QuestPoi } from "../questPoi/QuestPoi";

export type PointOfInterest = {
  createdAt: Date;
  id: string;
  location: string;
  name: string;
  pointsOfInterestLocales?: Array<PointsOfInterestLocale>;
  questPoiPoints?: Array<QuestPoi>;
  updatedAt: Date;
};
