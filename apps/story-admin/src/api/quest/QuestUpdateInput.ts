import { AreaQuestTriggerUpdateManyWithoutQuestsInput } from "./AreaQuestTriggerUpdateManyWithoutQuestsInput";
import { EpicWhereUniqueInput } from "../epic/EpicWhereUniqueInput";
import { QuestCompletionConditionalUpdateManyWithoutQuestsInput } from "./QuestCompletionConditionalUpdateManyWithoutQuestsInput";
import { QuestCueEffectWhereUniqueInput } from "../questCueEffect/QuestCueEffectWhereUniqueInput";
import { QuestDescriptionConditionalUpdateManyWithoutQuestsInput } from "./QuestDescriptionConditionalUpdateManyWithoutQuestsInput";
import { QuestDetailWhereUniqueInput } from "../questDetail/QuestDetailWhereUniqueInput";
import { QuestGreetingWhereUniqueInput } from "../questGreeting/QuestGreetingWhereUniqueInput";
import { QuestTemplateWhereUniqueInput } from "../questTemplate/QuestTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuestUpdateInput = {
  areaQuestTriggers?: AreaQuestTriggerUpdateManyWithoutQuestsInput;
  epic?: EpicWhereUniqueInput | null;
  questCompletionConditionals?: QuestCompletionConditionalUpdateManyWithoutQuestsInput;
  questCueEffects?: QuestCueEffectWhereUniqueInput | null;
  questDescriptionConditionals?: QuestDescriptionConditionalUpdateManyWithoutQuestsInput;
  questDetails?: QuestDetailWhereUniqueInput | null;
  questGreeting?: QuestGreetingWhereUniqueInput | null;
  questTemplate?: QuestTemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
