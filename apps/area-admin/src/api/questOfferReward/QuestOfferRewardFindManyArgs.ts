import { QuestOfferRewardWhereInput } from "./QuestOfferRewardWhereInput";
import { QuestOfferRewardOrderByInput } from "./QuestOfferRewardOrderByInput";

export type QuestOfferRewardFindManyArgs = {
  where?: QuestOfferRewardWhereInput;
  orderBy?: Array<QuestOfferRewardOrderByInput>;
  skip?: number;
  take?: number;
};
