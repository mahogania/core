import { QuestGreeting as TQuestGreeting } from "../api/questGreeting/QuestGreeting";

export const QUESTGREETING_TITLE_FIELD = "name";

export const QuestGreetingTitle = (record: TQuestGreeting): string => {
  return record.name?.toString() || String(record.id);
};
