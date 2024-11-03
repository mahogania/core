import { QuestOfferRewardConditional } from "../questOfferRewardConditional/QuestOfferRewardConditional";
import { QuestOfferRewardLocale } from "../questOfferRewardLocale/QuestOfferRewardLocale";
import { QuestRewardItem } from "../questRewardItem/QuestRewardItem";
import { QuestRewardSpell } from "../questRewardSpell/QuestRewardSpell";
import { QuestTemplate } from "../questTemplate/QuestTemplate";

export type QuestOfferReward = {
  createdAt: Date;
  id: string;
  questOfferRewardConditionals?: Array<QuestOfferRewardConditional>;
  questOfferRewardLocales?: Array<QuestOfferRewardLocale>;
  questRewardItem?: QuestRewardItem | null;
  questRewardSpell?: QuestRewardSpell | null;
  questTemplates?: Array<QuestTemplate>;
  updatedAt: Date;
};
