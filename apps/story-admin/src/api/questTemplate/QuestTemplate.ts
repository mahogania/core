import { QuestMail } from "../questMail/QuestMail";
import { QuestObjective } from "../questObjective/QuestObjective";
import { QuestOfferReward } from "../questOfferReward/QuestOfferReward";
import { QuestPool } from "../questPool/QuestPool";
import { QuestRequestItem } from "../questRequestItem/QuestRequestItem";
import { QuestTemplateLocale } from "../questTemplateLocale/QuestTemplateLocale";
import { Quest } from "../quest/Quest";

export type QuestTemplate = {
  createdAt: Date;
  id: string;
  questMails?: QuestMail | null;
  questObjectives?: QuestObjective;
  questOfferRewards?: QuestOfferReward | null;
  questPools?: QuestPool | null;
  questRequestItems?: QuestRequestItem | null;
  questTemplateLocale?: QuestTemplateLocale | null;
  quests?: Array<Quest>;
  updatedAt: Date;
};
