import { QuestMail as TQuestMail } from "../api/questMail/QuestMail";

export const QUESTMAIL_TITLE_FIELD = "name";

export const QuestMailTitle = (record: TQuestMail): string => {
  return record.name?.toString() || String(record.id);
};
