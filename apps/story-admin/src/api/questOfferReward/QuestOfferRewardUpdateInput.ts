import { QuestOfferRewardConditionalUpdateManyWithoutQuestOfferRewardsInput } from "./QuestOfferRewardConditionalUpdateManyWithoutQuestOfferRewardsInput";
import { QuestOfferRewardLocaleUpdateManyWithoutQuestOfferRewardsInput } from "./QuestOfferRewardLocaleUpdateManyWithoutQuestOfferRewardsInput";
import { QuestRewardItemWhereUniqueInput } from "../questRewardItem/QuestRewardItemWhereUniqueInput";
import { QuestRewardSpellWhereUniqueInput } from "../questRewardSpell/QuestRewardSpellWhereUniqueInput";
import { QuestTemplateUpdateManyWithoutQuestOfferRewardsInput } from "./QuestTemplateUpdateManyWithoutQuestOfferRewardsInput";

export type QuestOfferRewardUpdateInput = {
  questOfferRewardConditionals?: QuestOfferRewardConditionalUpdateManyWithoutQuestOfferRewardsInput;
  questOfferRewardLocales?: QuestOfferRewardLocaleUpdateManyWithoutQuestOfferRewardsInput;
  questRewardItem?: QuestRewardItemWhereUniqueInput | null;
  questRewardSpell?: QuestRewardSpellWhereUniqueInput | null;
  questTemplates?: QuestTemplateUpdateManyWithoutQuestOfferRewardsInput;
};
