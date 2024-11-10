import { QuestRewardItemWhereInput } from "./QuestRewardItemWhereInput";
import { QuestRewardItemOrderByInput } from "./QuestRewardItemOrderByInput";

export type QuestRewardItemFindManyArgs = {
  where?: QuestRewardItemWhereInput;
  orderBy?: Array<QuestRewardItemOrderByInput>;
  skip?: number;
  take?: number;
};
