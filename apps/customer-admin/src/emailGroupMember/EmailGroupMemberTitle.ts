import { EmailGroupMember as TEmailGroupMember } from "../api/emailGroupMember/EmailGroupMember";

export const EMAILGROUPMEMBER_TITLE_FIELD = "name";

export const EmailGroupMemberTitle = (record: TEmailGroupMember): string => {
  return record.name?.toString() || String(record.id);
};
