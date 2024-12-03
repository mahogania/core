import { StringFilter } from "../../util/StringFilter";
import { PointOfInterestWhereUniqueInput } from "../pointOfInterest/PointOfInterestWhereUniqueInput";
import { QuestRegionWhereUniqueInput } from "../questRegion/QuestRegionWhereUniqueInput";

export type QuestPoiWhereInput = {
  id?: StringFilter;
  pointOfInterest?: PointOfInterestWhereUniqueInput;
  questPoi?: QuestRegionWhereUniqueInput;
};
