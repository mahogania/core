import { StringFilter } from "../../util/StringFilter";
import { QuestOfferRewardListRelationFilter } from "../questOfferReward/QuestOfferRewardListRelationFilter";

export type QuestRewardItemWhereInput = {
  id?: StringFilter;
  questOfferRewards?: QuestOfferRewardListRelationFilter;
};
