import { PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput } from "./PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput";
import { QuestPoiUpdateManyWithoutPointOfInterestsInput } from "./QuestPoiUpdateManyWithoutPointOfInterestsInput";

export type PointOfInterestUpdateInput = {
  location?: string;
  name?: string;
  pointsOfInterestLocales?: PointsOfInterestLocaleUpdateManyWithoutPointOfInterestsInput;
  questPoiPoints?: QuestPoiUpdateManyWithoutPointOfInterestsInput;
};
