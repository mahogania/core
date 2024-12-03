import { StringFilter } from "../../util/StringFilter";
import { QuestOfferRewardListRelationFilter } from "../questOfferReward/QuestOfferRewardListRelationFilter";

export type QuestRewardSpellWhereInput = {
  id?: StringFilter;
  questOfferRewards?: QuestOfferRewardListRelationFilter;
};
