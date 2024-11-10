import { QuestRegionWhereInput } from "./QuestRegionWhereInput";
import { QuestRegionOrderByInput } from "./QuestRegionOrderByInput";

export type QuestRegionFindManyArgs = {
  where?: QuestRegionWhereInput;
  orderBy?: Array<QuestRegionOrderByInput>;
  skip?: number;
  take?: number;
};
