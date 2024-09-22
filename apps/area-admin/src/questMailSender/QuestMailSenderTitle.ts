import { QuestMailSender as TQuestMailSender } from "../api/questMailSender/QuestMailSender";

export const QUESTMAILSENDER_TITLE_FIELD = "id";

export const QuestMailSenderTitle = (record: TQuestMailSender): string => {
  return record.id?.toString() || String(record.id);
};
