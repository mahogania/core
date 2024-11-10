import { QuestGreeting } from "../questGreeting/QuestGreeting";

export type QuestGreetingLocale = {
  createdAt: Date;
  id: string;
  questGreeting?: QuestGreeting | null;
  updatedAt: Date;
};
