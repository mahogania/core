import { QuestRewardSpellWhereInput } from "./QuestRewardSpellWhereInput";
import { QuestRewardSpellOrderByInput } from "./QuestRewardSpellOrderByInput";

export type QuestRewardSpellFindManyArgs = {
  where?: QuestRewardSpellWhereInput;
  orderBy?: Array<QuestRewardSpellOrderByInput>;
  skip?: number;
  take?: number;
};
