import { QuestOfferReward } from "../questOfferReward/QuestOfferReward";

export type QuestRewardSpell = {
  createdAt: Date;
  id: string;
  questOfferRewards?: Array<QuestOfferReward>;
  updatedAt: Date;
};
