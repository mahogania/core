import { QuestPoolMembers as TQuestPoolMembers } from "../api/questPoolMembers/QuestPoolMembers";

export const QUESTPOOLMEMBERS_TITLE_FIELD = "id";

export const QuestPoolMembersTitle = (record: TQuestPoolMembers): string => {
  return record.id?.toString() || String(record.id);
};
