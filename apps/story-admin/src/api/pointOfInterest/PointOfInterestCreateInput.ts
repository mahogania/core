import { PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput } from "./PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput";
import { QuestPoiCreateNestedManyWithoutPointOfInterestsInput } from "./QuestPoiCreateNestedManyWithoutPointOfInterestsInput";

export type PointOfInterestCreateInput = {
  location: string;
  name: string;
  pointsOfInterestLocales?: PointsOfInterestLocaleCreateNestedManyWithoutPointOfInterestsInput;
  questPoiPoints?: QuestPoiCreateNestedManyWithoutPointOfInterestsInput;
};
