import { AreaQuestTriggerListRelationFilter } from "../areaQuestTrigger/AreaQuestTriggerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestCompletionConditionalListRelationFilter } from "../questCompletionConditional/QuestCompletionConditionalListRelationFilter";
import { QuestCueEffectWhereUniqueInput } from "../questCueEffect/QuestCueEffectWhereUniqueInput";
import { QuestDescriptionConditionalListRelationFilter } from "../questDescriptionConditional/QuestDescriptionConditionalListRelationFilter";
import { QuestDetailWhereUniqueInput } from "../questDetail/QuestDetailWhereUniqueInput";
import { QuestGreetingWhereUniqueInput } from "../questGreeting/QuestGreetingWhereUniqueInput";
import { QuestTemplateWhereUniqueInput } from "../questTemplate/QuestTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestWhereInput = {
  areaQuestTriggers?: AreaQuestTriggerListRelationFilter;
  id?: StringFilter;
  questCompletionConditionals?: QuestCompletionConditionalListRelationFilter;
  questCueEffects?: QuestCueEffectWhereUniqueInput;
  questDescriptionConditionals?: QuestDescriptionConditionalListRelationFilter;
  questDetails?: QuestDetailWhereUniqueInput;
  questGreeting?: QuestGreetingWhereUniqueInput;
  questTemplate?: QuestTemplateWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
