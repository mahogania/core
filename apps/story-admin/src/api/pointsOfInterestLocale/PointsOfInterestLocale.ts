import { PointOfInterest } from "../pointOfInterest/PointOfInterest";

export type PointsOfInterestLocale = {
  createdAt: Date;
  id: string;
  pointsOfInterest?: PointOfInterest | null;
  updatedAt: Date;
};
