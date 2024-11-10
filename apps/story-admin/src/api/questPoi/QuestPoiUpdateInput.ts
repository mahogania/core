import { PointOfInterestWhereUniqueInput } from "../pointOfInterest/PointOfInterestWhereUniqueInput";
import { QuestRegionWhereUniqueInput } from "../questRegion/QuestRegionWhereUniqueInput";

export type QuestPoiUpdateInput = {
  pointOfInterest?: PointOfInterestWhereUniqueInput;
  questPoi?: QuestRegionWhereUniqueInput | null;
};
