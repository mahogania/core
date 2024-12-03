import { QuestRewardChoiceItemsWhereInput } from "./QuestRewardChoiceItemsWhereInput";
import { QuestRewardChoiceItemsOrderByInput } from "./QuestRewardChoiceItemsOrderByInput";

export type QuestRewardChoiceItemsFindManyArgs = {
  where?: QuestRewardChoiceItemsWhereInput;
  orderBy?: Array<QuestRewardChoiceItemsOrderByInput>;
  skip?: number;
  take?: number;
};
