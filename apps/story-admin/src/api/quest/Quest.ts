import { AreaQuestTrigger } from "../areaQuestTrigger/AreaQuestTrigger";
import { QuestCompletionConditional } from "../questCompletionConditional/QuestCompletionConditional";
import { QuestCueEffect } from "../questCueEffect/QuestCueEffect";
import { QuestDescriptionConditional } from "../questDescriptionConditional/QuestDescriptionConditional";
import { QuestDetail } from "../questDetail/QuestDetail";
import { QuestGreeting } from "../questGreeting/QuestGreeting";
import { QuestTemplate } from "../questTemplate/QuestTemplate";
import { User } from "../user/User";

export type Quest = {
  areaQuestTriggers?: Array<AreaQuestTrigger>;
  createdAt: Date;
  id: string;
  questCompletionConditionals?: Array<QuestCompletionConditional>;
  questCueEffects?: QuestCueEffect | null;
  questDescriptionConditionals?: Array<QuestDescriptionConditional>;
  questDetails?: QuestDetail | null;
  questGreeting?: QuestGreeting | null;
  questTemplate?: QuestTemplate | null;
  updatedAt: Date;
  user?: User | null;
};
