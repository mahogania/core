import { QuestGreetingLocale } from "../questGreetingLocale/QuestGreetingLocale";
import { Quest } from "../quest/Quest";

export type QuestGreeting = {
  createdAt: Date;
  id: string;
  name: string;
  questGreetingLocales?: Array<QuestGreetingLocale>;
  quests?: Array<Quest>;
  text: string | null;
  updatedAt: Date;
};
