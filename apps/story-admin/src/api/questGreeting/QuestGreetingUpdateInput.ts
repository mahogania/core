import { QuestGreetingLocaleUpdateManyWithoutQuestGreetingsInput } from "./QuestGreetingLocaleUpdateManyWithoutQuestGreetingsInput";
import { QuestUpdateManyWithoutQuestGreetingsInput } from "./QuestUpdateManyWithoutQuestGreetingsInput";

export type QuestGreetingUpdateInput = {
  name?: string;
  questGreetingLocales?: QuestGreetingLocaleUpdateManyWithoutQuestGreetingsInput;
  quests?: QuestUpdateManyWithoutQuestGreetingsInput;
  text?: string | null;
};
