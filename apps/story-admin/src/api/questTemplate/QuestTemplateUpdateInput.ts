import { QuestMailWhereUniqueInput } from "../questMail/QuestMailWhereUniqueInput";
import { QuestObjectiveWhereUniqueInput } from "../questObjective/QuestObjectiveWhereUniqueInput";
import { QuestOfferRewardWhereUniqueInput } from "../questOfferReward/QuestOfferRewardWhereUniqueInput";
import { QuestPoolWhereUniqueInput } from "../questPool/QuestPoolWhereUniqueInput";
import { QuestRequestItemWhereUniqueInput } from "../questRequestItem/QuestRequestItemWhereUniqueInput";
import { QuestTemplateLocaleWhereUniqueInput } from "../questTemplateLocale/QuestTemplateLocaleWhereUniqueInput";
import { QuestUpdateManyWithoutQuestTemplatesInput } from "./QuestUpdateManyWithoutQuestTemplatesInput";

export type QuestTemplateUpdateInput = {
  questMails?: QuestMailWhereUniqueInput | null;
  questObjectives?: QuestObjectiveWhereUniqueInput;
  questOfferRewards?: QuestOfferRewardWhereUniqueInput | null;
  questPools?: QuestPoolWhereUniqueInput | null;
  questRequestItems?: QuestRequestItemWhereUniqueInput | null;
  questTemplateLocale?: QuestTemplateLocaleWhereUniqueInput | null;
  quests?: QuestUpdateManyWithoutQuestTemplatesInput;
};
