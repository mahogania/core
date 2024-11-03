import { QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput } from "./QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput";
import { QuestCreateNestedManyWithoutQuestGreetingsInput } from "./QuestCreateNestedManyWithoutQuestGreetingsInput";

export type QuestGreetingCreateInput = {
  name: string;
  questGreetingLocales?: QuestGreetingLocaleCreateNestedManyWithoutQuestGreetingsInput;
  quests?: QuestCreateNestedManyWithoutQuestGreetingsInput;
  text?: string | null;
};
