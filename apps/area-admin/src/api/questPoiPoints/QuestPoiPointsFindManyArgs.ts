import { QuestPoiPointsWhereInput } from "./QuestPoiPointsWhereInput";
import { QuestPoiPointsOrderByInput } from "./QuestPoiPointsOrderByInput";

export type QuestPoiPointsFindManyArgs = {
  where?: QuestPoiPointsWhereInput;
  orderBy?: Array<QuestPoiPointsOrderByInput>;
  skip?: number;
  take?: number;
};
