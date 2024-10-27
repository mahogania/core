import { StringFilter } from "../../util/StringFilter";
import { QuestMailWhereUniqueInput } from "../questMail/QuestMailWhereUniqueInput";
import { QuestObjectiveWhereUniqueInput } from "../questObjective/QuestObjectiveWhereUniqueInput";
import { QuestOfferRewardWhereUniqueInput } from "../questOfferReward/QuestOfferRewardWhereUniqueInput";
import { QuestPoolWhereUniqueInput } from "../questPool/QuestPoolWhereUniqueInput";
import { QuestRequestItemWhereUniqueInput } from "../questRequestItem/QuestRequestItemWhereUniqueInput";
import { QuestTemplateLocaleWhereUniqueInput } from "../questTemplateLocale/QuestTemplateLocaleWhereUniqueInput";
import { QuestListRelationFilter } from "../quest/QuestListRelationFilter";

export type QuestTemplateWhereInput = {
  id?: StringFilter;
  questMails?: QuestMailWhereUniqueInput;
  questObjectives?: QuestObjectiveWhereUniqueInput;
  questOfferRewards?: QuestOfferRewardWhereUniqueInput;
  questPools?: QuestPoolWhereUniqueInput;
  questRequestItems?: QuestRequestItemWhereUniqueInput;
  questTemplateLocale?: QuestTemplateLocaleWhereUniqueInput;
  quests?: QuestListRelationFilter;
};
