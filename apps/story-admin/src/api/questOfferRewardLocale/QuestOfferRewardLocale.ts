import { QuestOfferReward } from "../questOfferReward/QuestOfferReward";

export type QuestOfferRewardLocale = {
  createdAt: Date;
  id: string;
  questOfferReward?: QuestOfferReward | null;
  updatedAt: Date;
};
