import { StringFilter } from "../../util/StringFilter";
import { PointsOfInterestLocaleListRelationFilter } from "../pointsOfInterestLocale/PointsOfInterestLocaleListRelationFilter";
import { QuestPoiListRelationFilter } from "../questPoi/QuestPoiListRelationFilter";

export type PointOfInterestWhereInput = {
  id?: StringFilter;
  location?: StringFilter;
  name?: StringFilter;
  pointsOfInterestLocales?: PointsOfInterestLocaleListRelationFilter;
  questPoiPoints?: QuestPoiListRelationFilter;
};
