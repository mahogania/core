import { QuestPoolMember as TQuestPoolMember } from "../api/questPoolMember/QuestPoolMember";

export const QUESTPOOLMEMBER_TITLE_FIELD = "id";

export const QuestPoolMemberTitle = (record: TQuestPoolMember): string => {
  return record.id?.toString() || String(record.id);
};
