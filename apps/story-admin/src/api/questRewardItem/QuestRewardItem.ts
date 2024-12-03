import { QuestOfferReward } from "../questOfferReward/QuestOfferReward";

export type QuestRewardItem = {
  createdAt: Date;
  id: string;
  questOfferRewards?: Array<QuestOfferReward>;
  updatedAt: Date;
};
