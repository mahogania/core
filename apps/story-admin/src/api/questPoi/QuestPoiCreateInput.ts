import { PointOfInterestWhereUniqueInput } from "../pointOfInterest/PointOfInterestWhereUniqueInput";
import { QuestRegionWhereUniqueInput } from "../questRegion/QuestRegionWhereUniqueInput";

export type QuestPoiCreateInput = {
  pointOfInterest: PointOfInterestWhereUniqueInput;
  questPoi?: QuestRegionWhereUniqueInput | null;
};
