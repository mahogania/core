import { QuestOfferReward } from "../questOfferReward/QuestOfferReward";

export type QuestOfferRewardConditional = {
  createdAt: Date;
  id: string;
  questOfferReward?: QuestOfferReward | null;
  updatedAt: Date;
};
