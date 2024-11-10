import { QuestGreeting as TQuestGreeting } from "../api/questGreeting/QuestGreeting";

export const QUESTGREETING_TITLE_FIELD = "id";

export const QuestGreetingTitle = (record: TQuestGreeting): string => {
  return record.id?.toString() || String(record.id);
};
