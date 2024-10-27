import { StringFilter } from "../../util/StringFilter";
import { QuestOfferRewardConditionalListRelationFilter } from "../questOfferRewardConditional/QuestOfferRewardConditionalListRelationFilter";
import { QuestOfferRewardLocaleListRelationFilter } from "../questOfferRewardLocale/QuestOfferRewardLocaleListRelationFilter";
import { QuestRewardItemWhereUniqueInput } from "../questRewardItem/QuestRewardItemWhereUniqueInput";
import { QuestRewardSpellWhereUniqueInput } from "../questRewardSpell/QuestRewardSpellWhereUniqueInput";
import { QuestTemplateListRelationFilter } from "../questTemplate/QuestTemplateListRelationFilter";

export type QuestOfferRewardWhereInput = {
  id?: StringFilter;
  questOfferRewardConditionals?: QuestOfferRewardConditionalListRelationFilter;
  questOfferRewardLocales?: QuestOfferRewardLocaleListRelationFilter;
  questRewardItem?: QuestRewardItemWhereUniqueInput;
  questRewardSpell?: QuestRewardSpellWhereUniqueInput;
  questTemplates?: QuestTemplateListRelationFilter;
};
