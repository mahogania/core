import { QuestPoiWhereInput } from "./QuestPoiWhereInput";
import { QuestPoiOrderByInput } from "./QuestPoiOrderByInput";

export type QuestPoiFindManyArgs = {
  where?: QuestPoiWhereInput;
  orderBy?: Array<QuestPoiOrderByInput>;
  skip?: number;
  take?: number;
};
