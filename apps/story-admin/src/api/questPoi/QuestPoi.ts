import { PointOfInterest } from "../pointOfInterest/PointOfInterest";
import { QuestRegion } from "../questRegion/QuestRegion";

export type QuestPoi = {
  createdAt: Date;
  id: string;
  pointOfInterest?: PointOfInterest;
  questPoi?: QuestRegion | null;
  updatedAt: Date;
};
