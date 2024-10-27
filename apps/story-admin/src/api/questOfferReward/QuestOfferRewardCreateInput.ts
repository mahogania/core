import { QuestOfferRewardConditionalCreateNestedManyWithoutQuestOfferRewardsInput } from "./QuestOfferRewardConditionalCreateNestedManyWithoutQuestOfferRewardsInput";
import { QuestOfferRewardLocaleCreateNestedManyWithoutQuestOfferRewardsInput } from "./QuestOfferRewardLocaleCreateNestedManyWithoutQuestOfferRewardsInput";
import { QuestRewardItemWhereUniqueInput } from "../questRewardItem/QuestRewardItemWhereUniqueInput";
import { QuestRewardSpellWhereUniqueInput } from "../questRewardSpell/QuestRewardSpellWhereUniqueInput";
import { QuestTemplateCreateNestedManyWithoutQuestOfferRewardsInput } from "./QuestTemplateCreateNestedManyWithoutQuestOfferRewardsInput";

export type QuestOfferRewardCreateInput = {
  questOfferRewardConditionals?: QuestOfferRewardConditionalCreateNestedManyWithoutQuestOfferRewardsInput;
  questOfferRewardLocales?: QuestOfferRewardLocaleCreateNestedManyWithoutQuestOfferRewardsInput;
  questRewardItem?: QuestRewardItemWhereUniqueInput | null;
  questRewardSpell?: QuestRewardSpellWhereUniqueInput | null;
  questTemplates?: QuestTemplateCreateNestedManyWithoutQuestOfferRewardsInput;
};
