import { AreaQuestTriggerCreateNestedManyWithoutQuestsInput } from "./AreaQuestTriggerCreateNestedManyWithoutQuestsInput";
import { QuestCompletionConditionalCreateNestedManyWithoutQuestsInput } from "./QuestCompletionConditionalCreateNestedManyWithoutQuestsInput";
import { QuestCueEffectWhereUniqueInput } from "../questCueEffect/QuestCueEffectWhereUniqueInput";
import { QuestDescriptionConditionalCreateNestedManyWithoutQuestsInput } from "./QuestDescriptionConditionalCreateNestedManyWithoutQuestsInput";
import { QuestDetailWhereUniqueInput } from "../questDetail/QuestDetailWhereUniqueInput";
import { QuestGreetingWhereUniqueInput } from "../questGreeting/QuestGreetingWhereUniqueInput";
import { QuestTemplateWhereUniqueInput } from "../questTemplate/QuestTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestCreateInput = {
  areaQuestTriggers?: AreaQuestTriggerCreateNestedManyWithoutQuestsInput;
  questCompletionConditionals?: QuestCompletionConditionalCreateNestedManyWithoutQuestsInput;
  questCueEffects?: QuestCueEffectWhereUniqueInput | null;
  questDescriptionConditionals?: QuestDescriptionConditionalCreateNestedManyWithoutQuestsInput;
  questDetails?: QuestDetailWhereUniqueInput | null;
  questGreeting?: QuestGreetingWhereUniqueInput | null;
  questTemplate?: QuestTemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
